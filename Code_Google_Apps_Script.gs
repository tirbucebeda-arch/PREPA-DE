// À coller dans Extensions > Apps Script depuis le classeur de résultats.
// Déployer comme application Web, exécutée en tant que propriétaire,
// accessible à tous les utilisateurs. Garder l'URL /exec privée.
const FEUILLE = 'Résultats';
const COLONNES = ['ID', 'Réception', 'Date composition', 'Nom', 'Prénoms', 'Matricule', 'Filière', 'Antenne', 'Téléphone', 'Sujet', 'Matière', 'Bonnes', 'Mauvaises', 'Vides', 'Total', 'Score', 'Note /20', 'Temps', 'Auto envoi', 'Incidents'];
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (!data.resultId || !data.sujet || !Number.isFinite(Number(data.note20))) throw Error('Résultat incomplet');
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(FEUILLE) || book.insertSheet(FEUILLE);
    if (sheet.getLastRow() === 0) sheet.appendRow(COLONNES);
    const ids = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues().flat() : [];
    if (!ids.includes(String(data.resultId))) {
      const safe = value => { const s = String(value ?? ''); return /^[=+\-@\t\r]/.test(s) ? "'" + s : s; };
      sheet.appendRow([
        String(data.resultId), new Date(), safe(data.date), safe(data.nom), safe(data.prenom),
        safe(data.matricule), safe(data.filiere), safe(data.antenne), safe(data.telephone),
        safe(data.sujet), safe(data.matiere), Number(data.bonnes) || 0,
        Number(data.mauvaises) || 0, Number(data.vides) || 0, Number(data.total) || 0,
        Number(data.score) || 0, Number(data.note20) || 0, safe(data.temps),
        Boolean(data.autoEnvoi), Number(data.incidents) || 0
      ]);
    }
    return ContentService.createTextOutput('OK');
  } catch (error) {
    return ContentService.createTextOutput('ERREUR: ' + error.message);
  } finally { lock.releaseLock(); }
}
