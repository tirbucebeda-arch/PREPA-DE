// Les résultats restent sur l'appareil jusqu'à une tentative d'envoi réussie côté navigateur.
// Google Apps Script déduplique les tentatives grâce à resultId.
(function () {
  const KEY = 'REVISION_RESULTATS_EN_ATTENTE_V1';
  let flushing = false;
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (_) { return []; }
  }
  function write(items) { localStorage.setItem(KEY, JSON.stringify(items)); }
  window.queueCentralResult = function (result) {
    const items = read();
    if (!items.some(x => x.resultId === result.id)) {
      items.push({
        resultId: result.id,
        date: result.date,
        nom: result.student?.nom || '',
        prenom: result.student?.prenom || '',
        matricule: result.student?.matricule || '',
        filiere: result.student?.filiere || '',
        antenne: result.student?.antenne || '',
        telephone: result.student?.telephone || '',
        sujet: result.subjectTitle,
        matiere: result.matter,
        bonnes: result.good,
        mauvaises: result.bad,
        vides: result.empty,
        total: result.total,
        score: result.score,
        note20: result.note20,
        temps: result.usedTime,
        autoEnvoi: result.autoSend,
        incidents: result.pageExitCount
      });
      write(items);
    }
    window.flushCentralResults();
  };
  window.flushCentralResults = async function () {
    const url = window.RESULTATS_GOOGLE_SCRIPT_URL;
    if (flushing || !url || !/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(url)) return;
    flushing = true;
    try {
      while (read().length) {
        const item = read()[0];
        // Apps Script ne fournit pas de réponse CORS lisible depuis un site statique.
        // La réponse opaque confirme seulement la transmission HTTP par le navigateur.
        await fetch(url, { method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
          body: JSON.stringify(item) });
        write(read().filter(x => x.resultId !== item.resultId));
      }
    } catch (error) { /* Conservation locale et nouvelle tentative à la reconnexion. */ }
    finally { flushing = false; }
  };
  window.addEventListener('online', window.flushCentralResults);
  window.addEventListener('DOMContentLoaded', window.flushCentralResults);
  setInterval(window.flushCentralResults, 60000);
})();
