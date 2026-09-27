/********************************************************************
     * CONFIGURATION PRINCIPALE
     * Tu peux modifier ici le mot de passe admin, les sujets, les dates,
     * les questions, les réponses correctes, la durée et le barème.
     ********************************************************************/
    const ADMIN_PASSWORD = "admin123"; // Change ce mot de passe ici.

    const CONFIG = {
      defaultMarking: {
        correct: 1,
        wrong: -1,
        empty: 0
      },
      subjects: [
{
          "id": "deontologie-ethique-1",
          "title": "Sujet unique",
          "matter": "Formation évaluation",
          "description": "Évaluation complète sur les règles déontologiques, le secret professionnel, la responsabilité et l’éthique infirmière.",
          "instructions": "Lis attentivement chaque question. Certaines questions peuvent avoir plusieurs bonnes réponses.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-05-10",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit respecter la confidentialité même après la mort du patient.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le secret professionnel oblige l’infirmier à préserver la confidentialité des informations concernant le patient, même après son décès. Cela maintient la dignité du patient et protège ses proches contre d’éventuels préjudices."
                    },
                    {
                              "type": "qcd",
                              "text": "Il est permis à l’infirmier de refuser ses soins sans justification en dehors des cas d’urgence.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Hors situation d’urgence, si l’infirmier refuse de donner des soins, il doit motiver et expliquer ce refus conformément à l’éthique professionnelle. Un refus arbitraire serait une faute."
                    },
                    {
                              "type": "qcd",
                              "text": "Transmettre des informations de santé à la famille du patient sans son accord est une faute déontologique.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le secret professionnel interdit de révéler des informations concernant la santé du patient à sa famille sans consentement explicite, sauf exceptions prévues par la loi."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut modifier une prescription médicale écrite sans consulter le prescripteur si cela lui semble nécessaire.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Un infirmier ne peut modifier une ordonnance médicale sans en parler au médecin, car seul le prescripteur en est responsable. Modifier sans avis médical est une faute grave."
                    },
                    {
                              "type": "qcd",
                              "text": "L’intégrité consiste principalement à respecter les horaires de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "L’intégrité englobe l’honnêteté, la loyauté, le respect du patient et l’application des règles professionnelles, pas seulement le respect des horaires."
                    },
                    {
                              "type": "qcd",
                              "text": "Il est interdit à l’infirmier d’accepter une commission pour un acte professionnel.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Accepter une commission ou rétribution pour un acte professionnel est un conflit d’intérêt et porte atteinte à l’indépendance et la probité de l’infirmier."
                    },
                    {
                              "type": "qcd",
                              "text": "Le secret professionnel doit être respecté uniquement lors des soins et pas lors de la formation d’étudiants.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le secret professionnel est valable en toutes circonstances, y compris lors de situations de formation ou d’encadrement d’étudiants."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier a le devoir d’assister toute personne en péril, même en dehors de son lieu de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "L’obligation légale et morale d’assistance à personne en danger impose d’apporter secours même hors exercice professionnel."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier a le droit d’inventer des techniques de soins et de les appliquer sans protocole.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Les soins infirmiers doivent suivre des protocoles validés pour garantir la sécurité et l’efficacité pour les patients."
                    },
                    {
                              "type": "qcd",
                              "text": "La prise en charge de la douleur fait partie du rôle propre de l’infirmier.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "L’évaluation et la prise en compte de la douleur sont des missions essentielles dans la pratique infirmière autonome."
                    },
                    {
                              "type": "qcm",
                              "text": "À qui l’infirmier doit-il s’adresser s’il a un doute grave sur une prescription médicale ?",
                              "options": [
                                        "Un autre patient",
                                        "Le pharmacien",
                                        "Le prescripteur",
                                        "L’entourage du patient"
                              ],
                              "answer": "Le prescripteur",
                              "correct": "Le prescripteur",
                              "explanation": "C’est au médecin prescripteur que revient la responsabilité de clarifier ou corriger une prescription."
                    },
                    {
                              "type": "qcm",
                              "text": "Lorsqu’un patient refuse d’être informé sur son état de santé, l’infirmier :",
                              "options": [
                                        "Le force à recevoir l’information",
                                        "Ignore sa volonté",
                                        "Respecte ce choix",
                                        "Appelle la police"
                              ],
                              "answer": "Respecte ce choix",
                              "correct": "Respecte ce choix",
                              "explanation": "Le patient peut choisir de ne pas recevoir d’informations, ce choix relève de son autonomie."
                    },
                    {
                              "type": "qcm",
                              "text": "En cas de situation de maltraitance sur un mineur, l’infirmier doit :",
                              "options": [
                                        "En informer les autorités judiciaires",
                                        "Garder le secret",
                                        "Alerter les médias",
                                        "Se taire sans rien faire"
                              ],
                              "answer": "En informer les autorités judiciaires",
                              "correct": "En informer les autorités judiciaires",
                              "explanation": "Le signalement de la maltraitance sur mineur est une obligation qui prévaut sur le secret professionnel."
                    },
                    {
                              "type": "qcm",
                              "text": "En cas de sinistre ou de calamité, l’infirmier doit :",
                              "options": [
                                        "Refuser d’intervenir quel que soit le contexte",
                                        "Apporter son concours à l’action des autorités compétentes",
                                        "Se cacher",
                                        "Rebrousser chemin"
                              ],
                              "answer": "Apporter son concours à l’action des autorités compétentes",
                              "correct": "Apporter son concours à l’action des autorités compétentes",
                              "explanation": "L’infirmier doit se mobiliser pour soutenir l’action collective dans l’intérêt public."
                    },
                    {
                              "type": "qcm",
                              "text": "Le code de déontologie s’applique :",
                              "options": [
                                        "Seulement à l’hôpital",
                                        "À tous les infirmiers et étudiants",
                                        "Uniquement en présence du supérieur",
                                        "Que dans les cabinets privés"
                              ],
                              "answer": "À tous les infirmiers et étudiants",
                              "correct": "À tous les infirmiers et étudiants",
                              "explanation": "Tous les infirmiers et étudiants doivent respecter le code, peu importe le lieu ou l’encadrement."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon le code, l’infirmier doit garantir avant tout :",
                              "options": [
                                        "Le bien-être financier du service",
                                        "La sécurité et le bien-être des patients",
                                        "Sa propre réputation",
                                        "Le nombre d’actes réalisés"
                              ],
                              "answer": "La sécurité et le bien-être des patients",
                              "correct": "La sécurité et le bien-être des patients",
                              "explanation": "La priorité absolue de l’action infirmière est la sécurité, la santé et le respect du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Un document professionnel infirmier doit absolument comporter :",
                              "options": [
                                        "Le numéro du patient",
                                        "La signature de l’infirmier",
                                        "Le nom du directeur",
                                        "Le budget prévisionnel du service"
                              ],
                              "answer": "La signature de l’infirmier",
                              "correct": "La signature de l’infirmier",
                              "explanation": "La signature engage la responsabilité de l’infirmier sur l’acte ou l’information portée au dossier."
                    },
                    {
                              "type": "qcm",
                              "text": "La non-discrimination du patient signifie que l’infirmier :",
                              "options": [
                                        "Soigne selon l’origine sociale",
                                        "Prend en compte uniquement l’âge",
                                        "Donne des soins égaux à tous",
                                        "Trie selon la religion"
                              ],
                              "answer": "Donne des soins égaux à tous",
                              "correct": "Donne des soins égaux à tous",
                              "explanation": "L’infirmier doit soigner tous les patients de façon équitable, quelle que soit leur situation."
                    },
                    {
                              "type": "qcm",
                              "text": "L’intégrité de l’infirmier se traduit principalement par :",
                              "options": [
                                        "Honnêteté et franchise",
                                        "Vitesse d’exécution",
                                        "Résistance au stress",
                                        "Caution pour un prêt bancaire"
                              ],
                              "answer": "Honnêteté et franchise",
                              "correct": "Honnêteté et franchise",
                              "explanation": "L’intégrité professionnelle implique la sincérité, la transparence et le respect de la morale."
                    },
                    {
                              "type": "qcm",
                              "text": "Quand l’infirmier participe à un projet de recherche, il doit avant tout :",
                              "options": [
                                        "Publier les résultats librement",
                                        "Respecter les lois et règlements",
                                        "Refuser toute contrainte éthique",
                                        "Imposer son point de vue"
                              ],
                              "answer": "Respecter les lois et règlements",
                              "correct": "Respecter les lois et règlements",
                              "explanation": "Toute recherche doit respecter le cadre légal et éthique, notamment la protection des personnes."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la gestion des médicaments, l’infirmier doit :",
                              "options": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption",
                                        "Expérimenter librement avec les produits",
                                        "Les laisser en accès libre"
                              ],
                              "answers": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption"
                              ],
                              "correct": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption"
                              ],
                              "explanation": "Ces vérifications préviennent des erreurs médicamenteuses et des accidents."
                    },
                    {
                              "type": "qcm",
                              "text": "L’information du patient selon le code doit être :",
                              "options": [
                                        "Adaptée",
                                        "Trompeuse",
                                        "Loyale",
                                        "Élaborée uniquement par écrit"
                              ],
                              "answers": [
                                        "Adaptée",
                                        "Loyale"
                              ],
                              "correct": [
                                        "Adaptée",
                                        "Loyale"
                              ],
                              "explanation": "Il est essentiel que le patient comprenne ce qui lui est communiqué, sans tromperie."
                    },
                    {
                              "type": "qcm",
                              "text": "Sont des modalités d’exercice reconnues pour l’infirmier :",
                              "options": [
                                        "Salarié",
                                        "Libéral",
                                        "Exclusivement bénévole",
                                        "Mixte"
                              ],
                              "answers": [
                                        "Salarié",
                                        "Libéral",
                                        "Mixte"
                              ],
                              "correct": [
                                        "Salarié",
                                        "Libéral",
                                        "Mixte"
                              ],
                              "explanation": "L’infirmier peut exercer en étant salarié, libéral ou en cumulant différents statuts."
                    },
                    {
                              "type": "qcm",
                              "text": "Font partie des devoirs envers les patients :",
                              "options": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur",
                                        "Favoriser l’avantage matériel",
                                        "Pratiquer l’euthanasie à la demande"
                              ],
                              "answers": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur"
                              ],
                              "correct": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur"
                              ],
                              "explanation": "Ces principes garantissent l’égalité et la qualité de soin sans conditions illicites."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier qui constate une situation de maltraitance envers une personne vulnérable doit :",
                              "options": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes",
                                        "Conseiller le silence",
                                        "Dissimuler les faits"
                              ],
                              "answers": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes"
                              ],
                              "correct": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes"
                              ],
                              "explanation": "L’infirmier doit agir prudemment et signaler aux autorités tout doute de maltraitance."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la collaboration professionnelle, l’infirmier doit :",
                              "options": [
                                        "Respecter l’indépendance des autres",
                                        "Favoriser les conflits de compétence",
                                        "Collaborer pour la qualité des soins",
                                        "Ne jamais échanger d’informations"
                              ],
                              "answers": [
                                        "Respecter l’indépendance des autres",
                                        "Collaborer pour la qualité des soins"
                              ],
                              "correct": [
                                        "Respecter l’indépendance des autres",
                                        "Collaborer pour la qualité des soins"
                              ],
                              "explanation": "La collaboration et le respect mutuel améliorent la prise en charge."
                    },
                    {
                              "type": "qcm",
                              "text": "Le respect de l’humanité dans le soin se traduit par :",
                              "options": [
                                        "La tolérance",
                                        "La générosité",
                                        "La compétition systématique",
                                        "L’empathie"
                              ],
                              "answers": [
                                        "La tolérance",
                                        "La générosité",
                                        "L’empathie"
                              ],
                              "correct": [
                                        "La tolérance",
                                        "La générosité",
                                        "L’empathie"
                              ],
                              "explanation": "Ce sont des qualités humaines essentielles pour des soins respectueux et dignes."
                    },
                    {
                              "type": "qcm",
                              "text": "Lors de son rôle d’encadrement, l’infirmier doit :",
                              "options": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Déléguer sans contrôle",
                                        "Faire respecter la déontologie"
                              ],
                              "answers": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Faire respecter la déontologie"
                              ],
                              "correct": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Faire respecter la déontologie"
                              ],
                              "explanation": "L’encadrement exige de garantir la compétence, la qualité et le respect des règles."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit déclarer ses liens d’intérêts lorsqu’il :",
                              "options": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Prend la parole lors d’une réunion de famille",
                                        "Participe à une formation universitaire"
                              ],
                              "answers": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Participe à une formation universitaire"
                              ],
                              "correct": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Participe à une formation universitaire"
                              ],
                              "explanation": "Déclarer ses liens d’intérêts garantit la transparence et l’éthique."
                    },
                    {
                              "type": "qcm",
                              "text": "En situation d’urgence sans protocole écrit, l’infirmier doit :",
                              "options": [
                                        "Attendre sans agir",
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale",
                                        "Intervenir seulement si cela l’arrange"
                              ],
                              "answers": [
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale"
                              ],
                              "correct": [
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale"
                              ],
                              "explanation": "En cas d’urgence, l’infirmier doit agir pour le bien du patient, tout en assurant sa sécurité."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon le code, le respect de la dignité du patient consiste à :",
                              "options": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Privilégier la rentabilité",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "answers": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "correct": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "explanation": "Ces principes assurent le respect du patient pendant et après sa vie."
                    },
                    {
                              "type": "qcm",
                              "text": "Assure la compétence professionnelle chez l’infirmier :",
                              "options": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique",
                                        "Refus de toute innovation",
                                        "Formation de base seulement"
                              ],
                              "answers": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique"
                              ],
                              "correct": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique"
                              ],
                              "explanation": "Se former et participer à des recherches maintiennent la compétence au plus haut niveau."
                    },
                    {
                              "type": "qcm",
                              "text": "Sont des documents obligatoires pour chaque patient :",
                              "options": [
                                        "Dossier de soins infirmiers",
                                        "Certificat médical",
                                        "Attestation réglementaire",
                                        "Fiche de pharmacie"
                              ],
                              "answers": [
                                        "Dossier de soins infirmiers",
                                        "Attestation réglementaire"
                              ],
                              "correct": [
                                        "Dossier de soins infirmiers",
                                        "Attestation réglementaire"
                              ],
                              "explanation": "Ces documents assurent la traçabilité et la conformité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Le respect du secret professionnel englobe :",
                              "options": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les conversations privées avec autrui",
                                        "Les échanges entre confrères"
                              ],
                              "answers": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les échanges entre confrères"
                              ],
                              "correct": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les échanges entre confrères"
                              ],
                              "explanation": "Toute information obtenue dans l’exercice professionnel doit rester confidentielle."
                    },
                    {
                              "type": "qcm",
                              "text": "L’impartialité de l’infirmier expert nécessite de :",
                              "options": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Prendre parti pour un proche",
                                        "Informer la personne examinée de la mission"
                              ],
                              "answers": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Informer la personne examinée de la mission"
                              ],
                              "correct": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Informer la personne examinée de la mission"
                              ],
                              "explanation": "L’impartialité exige transparence, objectivité et information à la personne concernée."
                    },
                    {
                              "type": "qcm",
                              "text": "Par rapport au patient en fin de vie, l’infirmier doit :",
                              "options": [
                                        "Préserver la dignité du mourant",
                                        "Provoquer la mort à la demande",
                                        "Accompagner la famille",
                                        "Assurer uniquement les soins de base"
                              ],
                              "answers": [
                                        "Préserver la dignité du mourant",
                                        "Accompagner la famille"
                              ],
                              "correct": [
                                        "Préserver la dignité du mourant",
                                        "Accompagner la famille"
                              ],
                              "explanation": "En fin de vie, l’accompagnement humain est primordial pour le patient et ses proches."
                    },
                    {
                              "type": "qcm",
                              "text": "Les actes strictement interdits selon le code sont :",
                              "options": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Assistance morale",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "answers": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "correct": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "explanation": "Ces pratiques sont formellement interdites, car contraires à l’éthique professionnelle."
                    },
                    {
                              "type": "qcm",
                              "text": "Pour garantir la qualité des soins supervisés, l’infirmier doit :",
                              "options": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant",
                                        "Laisser les étudiants agir librement",
                                        "Déléguer les responsabilités à un collègue"
                              ],
                              "answers": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant"
                              ],
                              "correct": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant"
                              ],
                              "explanation": "Contrôle et consentement sont garants de la qualité et de la sécurité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la pratique professionnelle, l’infirmier doit signaler :",
                              "options": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Informations confidentielles à la famille",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "answers": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "correct": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "explanation": "Ces signalements protègent la qualité des soins et la sécurité des patients."
                    },
                    {
                              "type": "qcm",
                              "text": "L’excellence des soins infirmiers concerne :",
                              "options": [
                                        "La sécurité du patient",
                                        "La rentabilité de l’établissement",
                                        "Le bien-être de la personne à chaque étape de la vie",
                                        "L’image positive de la profession"
                              ],
                              "answers": [
                                        "La sécurité du patient",
                                        "Le bien-être de la personne à chaque étape de la vie"
                              ],
                              "correct": [
                                        "La sécurité du patient",
                                        "Le bien-être de la personne à chaque étape de la vie"
                              ],
                              "explanation": "L’excellence se traduit par la recherche continue de la qualité, de la sécurité et du respect de la personnalité du patient à tout"
                    }
          ]
}
      ]
    };

    // Complément de la banque : 100 questions équilibrées au total
    // (34 Vrai/Faux, 33 réponses uniques et 33 réponses multiples).
    const EXTRA_TRUE_FALSE = [
      ["Le consentement libre et éclairé du patient doit être recherché avant un soin, sauf urgence prévue par la loi.", "Vrai"],
      ["Le secret professionnel ne concerne que les informations écrites dans le dossier médical.", "Faux"],
      ["L’infirmier doit assurer la continuité des soins lorsqu’il quitte son poste.", "Vrai"],
      ["Une erreur de soin peut être dissimulée si elle n’a pas entraîné de dommage visible.", "Faux"],
      ["Le respect de la dignité s’applique à toute personne, quelle que soit sa situation sociale.", "Vrai"],
      ["L’infirmier peut publier la photographie identifiable d’un patient sans son autorisation.", "Faux"],
      ["La traçabilité des soins contribue à la sécurité du patient.", "Vrai"],
      ["L’urgence autorise l’infirmier à agir dans les limites de ses compétences.", "Vrai"],
      ["Un étudiant peut réaliser seul tout acte infirmier sans supervision.", "Faux"],
      ["L’infirmier doit actualiser régulièrement ses connaissances professionnelles.", "Vrai"],
      ["Le refus de soins exprimé par un patient capable doit être ignoré.", "Faux"],
      ["La discrétion professionnelle concerne aussi les conversations dans les lieux publics.", "Vrai"],
      ["Une prescription illisible doit être exécutée sans demander de clarification.", "Faux"],
      ["L’infirmier doit respecter les croyances du patient lorsqu’elles ne compromettent pas la sécurité des soins.", "Vrai"],
      ["Le dossier de soins peut être laissé à la portée de toute personne du service.", "Faux"],
      ["La relation soignant-soigné doit rester professionnelle.", "Vrai"],
      ["L’infirmier peut recevoir un avantage pour orienter un patient vers un établissement particulier.", "Faux"],
      ["Le signalement d’un événement indésirable participe à l’amélioration de la qualité des soins.", "Vrai"],
      ["La confidentialité doit être respectée pendant les transmissions entre professionnels.", "Vrai"],
      ["L’infirmier est autorisé à exercer sous l’effet de l’alcool s’il se sent capable.", "Faux"],
      ["La responsabilité professionnelle peut être engagée en cas de négligence.", "Vrai"],
      ["Le patient n’a jamais le droit d’accéder aux informations qui le concernent.", "Faux"],
      ["L’infirmier doit protéger les données de santé enregistrées sur un outil numérique.", "Vrai"],
      ["La bientraitance consiste uniquement à administrer correctement les médicaments.", "Faux"]
    ];

    const EXTRA_SINGLE = [
      ["Quel principe impose de respecter les choix du patient ?", ["Autonomie", "Rentabilité", "Compétition", "Publicité"], "Autonomie"],
      ["Avant d’administrer un médicament, l’infirmier doit d’abord :", ["Vérifier l’identité du patient", "Demander à la famille de décider", "Modifier la dose", "Supprimer la prescription"], "Vérifier l’identité du patient"],
      ["Face à une prescription illisible, la conduite correcte est de :", ["Contacter le prescripteur", "Deviner la dose", "Ne rien tracer", "Demander au patient de choisir"], "Contacter le prescripteur"],
      ["La transmission ciblée sert principalement à :", ["Assurer la continuité des soins", "Faire de la publicité", "Remplacer le diagnostic médical", "Éviter toute communication"], "Assurer la continuité des soins"],
      ["Quel document assure la traçabilité quotidienne des soins infirmiers ?", ["Dossier de soins", "Carte bancaire", "Registre des visiteurs", "Bon de commande"], "Dossier de soins"],
      ["Lorsqu’une erreur médicamenteuse survient, la priorité est de :", ["Sécuriser et surveiller le patient", "Dissimuler l’erreur", "Effacer le dossier", "Quitter le service"], "Sécuriser et surveiller le patient"],
      ["Le secret partagé est permis principalement entre :", ["Professionnels participant à la prise en charge", "Tous les voisins", "Les médias", "Tous les visiteurs"], "Professionnels participant à la prise en charge"],
      ["La valeur éthique qui vise à ne pas nuire est :", ["Non-malfaisance", "Popularité", "Obéissance aveugle", "Rentabilité"], "Non-malfaisance"],
      ["En cas de refus de soins, l’infirmier doit :", ["Informer, respecter et tracer la décision", "Contraindre systématiquement", "Se moquer du patient", "Détruire le dossier"], "Informer, respecter et tracer la décision"],
      ["Le professionnel responsable de clarifier une prescription est :", ["Le prescripteur", "Le visiteur", "Le gardien", "Un autre patient"], "Le prescripteur"],
      ["La bonne attitude devant un collègue réalisant un acte dangereux est de :", ["Protéger le patient et signaler la situation", "Se taire toujours", "Filmer pour publier", "Encourager l’acte"], "Protéger le patient et signaler la situation"],
      ["Une information donnée au patient doit être :", ["Claire et adaptée", "Volontairement confuse", "Réservée aux proches", "Toujours mensongère"], "Claire et adaptée"],
      ["Le consentement du patient doit être :", ["Libre et éclairé", "Acheté", "Imposé", "Secret pour le patient"], "Libre et éclairé"],
      ["La formation continue permet surtout de :", ["Maintenir les compétences", "Éviter les protocoles", "Supprimer la responsabilité", "Remplacer tout travail en équipe"], "Maintenir les compétences"],
      ["Dans une situation d’urgence vitale, la priorité est de :", ["Porter secours dans ses compétences", "Attendre systématiquement", "Chercher un avantage financier", "Photographier la scène"], "Porter secours dans ses compétences"],
      ["Le respect de la vie privée exige notamment de :", ["Préserver l’intimité pendant les soins", "Laisser la porte ouverte", "Exposer le patient", "Informer tous les visiteurs"], "Préserver l’intimité pendant les soins"],
      ["Une délégation de tâche correcte nécessite :", ["Une personne compétente et une supervision", "L’absence de contrôle", "Le hasard", "L’accord des médias"], "Une personne compétente et une supervision"],
      ["L’identitovigilance vise à :", ["Éviter les erreurs d’identité", "Accélérer la facturation", "Classer les visiteurs", "Choisir les patients"], "Éviter les erreurs d’identité"],
      ["L’empathie consiste à :", ["Comprendre le vécu du patient sans le juger", "Décider à sa place", "Nier sa souffrance", "Rompre toute communication"], "Comprendre le vécu du patient sans le juger"],
      ["La justice dans les soins signifie :", ["Traiter équitablement les patients", "Favoriser ses proches", "Soigner selon la richesse", "Refuser les personnes vulnérables"], "Traiter équitablement les patients"],
      ["Après un soin, l’infirmier doit :", ["Tracer les actes réalisés", "Effacer la prescription", "Partager le dossier en public", "Modifier l’identité"], "Tracer les actes réalisés"],
      ["La première mesure de prévention des infections associées aux soins est :", ["L’hygiène des mains", "Le port permanent de bijoux", "La réutilisation des aiguilles", "L’absence de nettoyage"], "L’hygiène des mains"],
      ["Un conflit d’intérêts doit être :", ["Déclaré", "Caché", "Récompensé", "Imposé au patient"], "Déclaré"]
    ];

    const EXTRA_MULTIPLE = [
      ["Avant l’administration d’un médicament, quelles vérifications sont nécessaires ?", ["Identité du patient", "Nom du médicament", "Dose prescrite", "Popularité du produit"], ["Identité du patient", "Nom du médicament", "Dose prescrite"]],
      ["Quels éléments favorisent la confidentialité ?", ["Parler à voix basse", "Protéger les dossiers", "Choisir un lieu adapté", "Publier les informations"], ["Parler à voix basse", "Protéger les dossiers", "Choisir un lieu adapté"]],
      ["Quelles attitudes relèvent de la bientraitance ?", ["Écouter le patient", "Respecter son intimité", "Prévenir la douleur", "L’humilier"], ["Écouter le patient", "Respecter son intimité", "Prévenir la douleur"]],
      ["Quels éléments doivent être tracés après un soin ?", ["Acte réalisé", "Date et heure", "Observations pertinentes", "Rumeurs du quartier"], ["Acte réalisé", "Date et heure", "Observations pertinentes"]],
      ["En cas d’événement indésirable, l’infirmier doit :", ["Sécuriser le patient", "Alerter selon la procédure", "Tracer les faits", "Dissimuler l’événement"], ["Sécuriser le patient", "Alerter selon la procédure", "Tracer les faits"]],
      ["Quels droits fondamentaux du patient doivent être respectés ?", ["Dignité", "Information", "Consentement", "Discrimination"], ["Dignité", "Information", "Consentement"]],
      ["La continuité des soins repose sur :", ["Transmissions fiables", "Traçabilité", "Organisation de la relève", "Suppression du dossier"], ["Transmissions fiables", "Traçabilité", "Organisation de la relève"]],
      ["Quelles mesures protègent les données numériques de santé ?", ["Mot de passe personnel", "Verrouillage de l’écran", "Accès limité aux personnes autorisées", "Partage public des identifiants"], ["Mot de passe personnel", "Verrouillage de l’écran", "Accès limité aux personnes autorisées"]],
      ["Une communication professionnelle de qualité comprend :", ["Écoute active", "Langage adapté", "Respect", "Jugement humiliant"], ["Écoute active", "Langage adapté", "Respect"]],
      ["Lors de l’encadrement d’un étudiant, l’infirmier doit :", ["Évaluer ses compétences", "Superviser les actes", "Respecter le consentement du patient", "Le laisser agir sans contrôle"], ["Évaluer ses compétences", "Superviser les actes", "Respecter le consentement du patient"]],
      ["Quels comportements préviennent les conflits d’intérêts ?", ["Déclarer ses liens", "Refuser les avantages indus", "Rester impartial", "Accepter les commissions cachées"], ["Déclarer ses liens", "Refuser les avantages indus", "Rester impartial"]],
      ["Devant un refus de soins, quelles actions sont adaptées ?", ["Écouter les raisons", "Informer des conséquences", "Tracer le refus", "Forcer systématiquement"], ["Écouter les raisons", "Informer des conséquences", "Tracer le refus"]],
      ["Quels principes guident une pratique infirmière éthique ?", ["Bienfaisance", "Non-malfaisance", "Justice", "Favoritisme"], ["Bienfaisance", "Non-malfaisance", "Justice"]]
    ];

    const questionBank = CONFIG.subjects[0].questions;
    EXTRA_TRUE_FALSE.forEach(([text, correct]) => questionBank.push({
      type: "qcd", text, options: ["Vrai", "Faux"], answer: correct, correct,
      explanation: correct === "Vrai" ? "Cette affirmation respecte les règles professionnelles." : "Cette affirmation est contraire aux règles professionnelles."
    }));
    EXTRA_SINGLE.forEach(([text, options, correct]) => questionBank.push({
      type: "qcm", text, options, answer: correct, correct,
      explanation: `La bonne réponse est : ${correct}.`
    }));
    EXTRA_MULTIPLE.forEach(([text, options, correct]) => questionBank.push({
      type: "qcm", text, options, answers: correct, correct,
      explanation: "Les réponses indiquées correspondent aux bonnes pratiques professionnelles."
    }));

    /********************************************************************
     * VARIABLES GLOBALES
     ********************************************************************/
    // Sujet Santé publique AS importé depuis le document fourni.
    const SANTE_PUBLIQUE_AS_SUBJECT = {
  "id": "sante-publique-as-50q",
  "title": "Santé publique AS – 50 questions",
  "matter": "Santé publique",
  "description": "Sujet de Santé publique AS : prévention, épidémiologie, système de santé, hygiène, assainissement, paludisme, communication, vaccination et étude du milieu.",
  "instructions": "Répondez à toutes les questions. Les questions 1 à 25 sont des QCD Vrai/Faux et les questions 26 à 50 des QCM à réponse unique.",
  "duration": 30,
  "programmed": true,
  "openDate": "2026-09-20",
  "openTime": "00:00",
  "closeDate": "2030-12-31",
  "closeTime": "23:59",
  "marking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "questions": [
    {
      "type": "qcd",
      "text": "La prévention primaire vise à empêcher l’apparition d’une maladie.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle agit avant la survenue de la maladie, notamment par la vaccination et l’éducation sanitaire.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Prévention"
    },
    {
      "type": "qcd",
      "text": "La prévention secondaire intervient uniquement au stade terminal d’une maladie.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "Elle vise surtout le dépistage et la prise en charge précoce afin de limiter l’évolution de la maladie.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Prévention"
    },
    {
      "type": "qcd",
      "text": "La vaccination est une activité de prévention primaire.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle protège le sujet avant l’apparition de la maladie ciblée.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Prévention et vaccination"
    },
    {
      "type": "qcd",
      "text": "La prévalence prend en compte l’ensemble des cas anciens et nouveaux d’une maladie dans une population donnée.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle mesure tous les cas existants pendant une période ou à un moment donné.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Épidémiologie"
    },
    {
      "type": "qcd",
      "text": "L’incidence correspond à l’ensemble des cas anciens et nouveaux d’une maladie.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "L’incidence mesure uniquement les nouveaux cas survenus pendant une période donnée.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Épidémiologie"
    },
    {
      "type": "qcd",
      "text": "La santé publique relève de l’action organisée de l’État ou de ses représentants au profit de la population.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle mobilise la puissance publique pour protéger et promouvoir la santé collective.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Santé publique et santé communautaire"
    },
    {
      "type": "qcd",
      "text": "La santé communautaire exclut la participation de la population.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "La participation active de la communauté est un principe essentiel de la santé communautaire.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Santé communautaire"
    },
    {
      "type": "qcd",
      "text": "Les centres de santé ruraux appartiennent au versant prestataire du système sanitaire ivoirien.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Ils assurent des prestations de soins au premier niveau de contact.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Système de santé ivoirien"
    },
    {
      "type": "qcd",
      "text": "Le système sanitaire ivoirien comprend trois niveaux dans son versant prestataire.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Il est organisé en niveaux primaire, secondaire et tertiaire.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Système de santé ivoirien"
    },
    {
      "type": "qcd",
      "text": "Le CHU correspond à une structure du niveau primaire.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "Le CHU est une structure de référence du niveau tertiaire.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Système de santé ivoirien"
    },
    {
      "type": "qcd",
      "text": "La filtration de l’eau permet surtout de retirer les matières en suspension.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle clarifie l’eau en retenant une partie des impuretés, sans garantir à elle seule sa désinfection.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Hygiène de l’eau"
    },
    {
      "type": "qcd",
      "text": "L’ébullition de l’eau est un moyen de désinfection.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Une ébullition correcte détruit la majorité des germes pathogènes présents dans l’eau.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Hygiène de l’eau"
    },
    {
      "type": "qcd",
      "text": "Le compostage consiste à brûler les ordures ménagères.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "Le compostage transforme les déchets organiques biodégradables en compost; le brûlage correspond à l’incinération.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Assainissement"
    },
    {
      "type": "qcd",
      "text": "Le stockage familial des ordures se fait au niveau du ménage avant leur évacuation.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Il constitue la première étape de gestion des déchets produits par la famille.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Assainissement"
    },
    {
      "type": "qcd",
      "text": "Le paludisme est transmis à l’être humain par la piqûre de l’anophèle femelle infectée.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "L’anophèle femelle est le vecteur qui inocule le parasite lors de la piqûre.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Maladies transmissibles"
    },
    {
      "type": "qcd",
      "text": "Le Plasmodium est le vecteur du paludisme.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "Le Plasmodium est l’agent pathogène; le vecteur est l’anophèle femelle infectée.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Maladies transmissibles"
    },
    {
      "type": "qcd",
      "text": "La MILDA contribue à la prévention du paludisme.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle réduit le contact entre l’être humain et les moustiques vecteurs pendant le sommeil.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Pratiques familiales essentielles"
    },
    {
      "type": "qcd",
      "text": "Une cible primaire est la personne dont on cherche directement à modifier le comportement.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle est la bénéficiaire ou l’actrice directement concernée par le comportement visé.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Communication pour la santé"
    },
    {
      "type": "qcd",
      "text": "Une cible secondaire peut influencer le comportement de la cible primaire.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Son soutien ou son opinion peut faciliter ou freiner le changement recherché.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Communication pour la santé"
    },
    {
      "type": "qcd",
      "text": "Une cible tertiaire peut contribuer à la décision ou au financement d’un programme.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle comprend notamment les décideurs, responsables ou partenaires capables d’appuyer le programme.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Communication pour la santé"
    },
    {
      "type": "qcd",
      "text": "La communication interpersonnelle se déroule entre deux personnes ou dans un échange direct restreint.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Elle repose sur un contact direct permettant une rétroaction immédiate.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Communication"
    },
    {
      "type": "qcd",
      "text": "La préparation du matériel doit être faite après une causerie de groupe.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Faux",
      "correct": "Faux",
      "explanation": "Le matériel et le plan d’animation sont préparés avant la séance.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Causerie de groupe"
    },
    {
      "type": "qcd",
      "text": "Une visite à domicile doit avoir un objectif précis.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "L’objectif guide la préparation, les activités réalisées et l’évaluation de la visite.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Visite à domicile"
    },
    {
      "type": "qcd",
      "text": "Un perdu de vue est un patient qui ne revient pas au rendez-vous prévu selon le délai retenu par le programme.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "La notion est liée à l’interruption du suivi et non à la disparition physique du village.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Recherche des perdus de vue"
    },
    {
      "type": "qcd",
      "text": "Les accumulateurs de froid servent à maintenir une température adaptée dans une glacière ou un porte-vaccins.",
      "options": [
        "Vrai",
        "Faux"
      ],
      "answer": "Vrai",
      "correct": "Vrai",
      "explanation": "Une fois conditionnés, ils contribuent au maintien de la chaîne du froid pendant le transport.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Vaccination et chaîne du froid"
    },
    {
      "type": "qcm",
      "text": "Quel niveau de prévention comprend la vaccination ?",
      "options": [
        "Prévention primaire",
        "Prévention secondaire",
        "Prévention tertiaire",
        "Réadaptation"
      ],
      "answer": "Prévention primaire",
      "correct": "Prévention primaire",
      "explanation": "La vaccination intervient avant la maladie et relève donc de la prévention primaire.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Prévention"
    },
    {
      "type": "qcm",
      "text": "Quel indicateur mesure les nouveaux cas d’une maladie pendant une période donnée ?",
      "options": [
        "Prévalence",
        "Incidence",
        "Mortalité proportionnelle",
        "Densité"
      ],
      "answer": "Incidence",
      "correct": "Incidence",
      "explanation": "L’incidence dénombre les nouveaux cas apparus dans la population à risque pendant une période.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Épidémiologie"
    },
    {
      "type": "qcm",
      "text": "Quelle notion est essentielle à la santé communautaire ?",
      "options": [
        "Participation de la communauté",
        "Hospitalisation systématique",
        "Décision exclusive du médecin",
        "Absence de partenariat"
      ],
      "answer": "Participation de la communauté",
      "correct": "Participation de la communauté",
      "explanation": "La communauté participe à l’identification des problèmes, aux décisions et aux actions.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Santé communautaire"
    },
    {
      "type": "qcm",
      "text": "Quelle structure appartient aux établissements sanitaires de premier contact ?",
      "options": [
        "Centre de santé rural",
        "CHU",
        "Institut national spécialisé",
        "Direction centrale"
      ],
      "answer": "Centre de santé rural",
      "correct": "Centre de santé rural",
      "explanation": "Le centre de santé rural constitue une structure de premier contact avec la population.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Système de santé ivoirien"
    },
    {
      "type": "qcm",
      "text": "Quelle structure correspond au niveau tertiaire de soins ?",
      "options": [
        "Dispensaire rural",
        "Centre de santé urbain",
        "CHU",
        "Maternité rurale"
      ],
      "answer": "CHU",
      "correct": "CHU",
      "explanation": "Le CHU reçoit les cas nécessitant des soins spécialisés de haut niveau.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Système de santé ivoirien"
    },
    {
      "type": "qcm",
      "text": "Quel procédé transforme les déchets organiques en engrais naturel ?",
      "options": [
        "Incinération",
        "Compostage",
        "Enfouissement sauvage",
        "Balayage"
      ],
      "answer": "Compostage",
      "correct": "Compostage",
      "explanation": "Le compostage assure la décomposition contrôlée des matières organiques.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Assainissement"
    },
    {
      "type": "qcm",
      "text": "Quel procédé vise principalement à éliminer les matières en suspension dans l’eau ?",
      "options": [
        "Filtration",
        "Coloration",
        "Aération seule",
        "Stockage ouvert"
      ],
      "answer": "Filtration",
      "correct": "Filtration",
      "explanation": "La filtration retient les particules et clarifie l’eau.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Hygiène de l’eau"
    },
    {
      "type": "qcm",
      "text": "Quel est l’agent pathogène du paludisme ?",
      "options": [
        "Aedes",
        "Plasmodium",
        "Salmonella",
        "Vibrio"
      ],
      "answer": "Plasmodium",
      "correct": "Plasmodium",
      "explanation": "Le paludisme est une parasitose due à des protozoaires du genre Plasmodium.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Maladies transmissibles"
    },
    {
      "type": "qcm",
      "text": "Quel est le vecteur du paludisme ?",
      "options": [
        "Anophèle femelle infectée",
        "Anophèle mâle",
        "Mouche domestique",
        "Tique"
      ],
      "answer": "Anophèle femelle infectée",
      "correct": "Anophèle femelle infectée",
      "explanation": "Seule l’anophèle femelle prend un repas sanguin et peut transmettre le parasite.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Maladies transmissibles"
    },
    {
      "type": "qcm",
      "text": "Quelle mesure protège directement la famille contre les piqûres nocturnes de moustiques ?",
      "options": [
        "Utilisation correcte de la MILDA",
        "Conservation des déchets dans la chambre",
        "Arrêt de la vaccination",
        "Consommation d’eau non traitée"
      ],
      "answer": "Utilisation correcte de la MILDA",
      "correct": "Utilisation correcte de la MILDA",
      "explanation": "Dormir sous une MILDA bien installée réduit l’exposition aux moustiques vecteurs.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Pratiques familiales essentielles"
    },
    {
      "type": "qcm",
      "text": "Dans un programme de communication, qui est la cible primaire ?",
      "options": [
        "La personne dont le comportement doit changer",
        "Le bailleur uniquement",
        "Le décideur administratif uniquement",
        "Le fournisseur de matériel uniquement"
      ],
      "answer": "La personne dont le comportement doit changer",
      "correct": "La personne dont le comportement doit changer",
      "explanation": "La cible primaire est directement concernée par le comportement recherché.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Communication pour la santé"
    },
    {
      "type": "qcm",
      "text": "Qui représente le mieux une cible tertiaire ?",
      "options": [
        "Une mère directement concernée",
        "Un pair influent",
        "Un décideur pouvant financer le programme",
        "Un enfant bénéficiaire"
      ],
      "answer": "Un décideur pouvant financer le programme",
      "correct": "Un décideur pouvant financer le programme",
      "explanation": "La cible tertiaire détient souvent un pouvoir de décision, d’autorisation ou de financement.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Communication pour la santé"
    },
    {
      "type": "qcm",
      "text": "Quelle activité doit être réalisée avant une causerie de groupe ?",
      "options": [
        "Définir l’objectif de la séance",
        "Ranger le matériel utilisé",
        "Évaluer les acquis après la séance",
        "Rédiger le rapport final"
      ],
      "answer": "Définir l’objectif de la séance",
      "correct": "Définir l’objectif de la séance",
      "explanation": "L’objectif est défini pendant la préparation afin d’orienter le contenu et la méthode.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Causerie de groupe"
    },
    {
      "type": "qcm",
      "text": "Quelle caractéristique correspond à une bonne causerie de groupe ?",
      "options": [
        "Favoriser la participation",
        "Interdire toute question",
        "Lire sans échange",
        "Employer uniquement des termes techniques"
      ],
      "answer": "Favoriser la participation",
      "correct": "Favoriser la participation",
      "explanation": "La participation permet de vérifier la compréhension et d’adapter les messages.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Causerie de groupe"
    },
    {
      "type": "qcm",
      "text": "Quelle action termine normalement une visite à domicile ?",
      "options": [
        "Évaluer la visite et noter les informations utiles",
        "Choisir la famille cible",
        "Définir pour la première fois l’objectif",
        "Chercher le domicile"
      ],
      "answer": "Évaluer la visite et noter les informations utiles",
      "correct": "Évaluer la visite et noter les informations utiles",
      "explanation": "La fin de la visite comporte l’évaluation, la synthèse, les conseils finaux et la traçabilité.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Visite à domicile"
    },
    {
      "type": "qcm",
      "text": "Quel outil facilite le repérage des patients ayant manqué leur rendez-vous ?",
      "options": [
        "Liste des rendez-vous manqués",
        "Registre des stocks alimentaires",
        "Cahier de recettes",
        "Plan cadastral"
      ],
      "answer": "Liste des rendez-vous manqués",
      "correct": "Liste des rendez-vous manqués",
      "explanation": "La liste permet d’identifier les personnes à rechercher et d’organiser leur suivi.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Recherche des perdus de vue"
    },
    {
      "type": "qcm",
      "text": "Quel matériel sert au transport des vaccins lors d’une séance avancée ?",
      "options": [
        "Porte-vaccins",
        "Bassin de lit",
        "Stéthoscope",
        "Plateau de pansement"
      ],
      "answer": "Porte-vaccins",
      "correct": "Porte-vaccins",
      "explanation": "Le porte-vaccins, garni d’accumulateurs conditionnés, maintient les vaccins à la température requise.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Vaccination et chaîne du froid"
    },
    {
      "type": "qcm",
      "text": "Quel vaccin protège notamment contre la diphtérie, le tétanos et la coqueluche chez le nourrisson ?",
      "options": [
        "Pentavalent",
        "RR",
        "VAA",
        "HPV"
      ],
      "answer": "Pentavalent",
      "correct": "Pentavalent",
      "explanation": "Le vaccin pentavalent associe plusieurs valences dont diphtérie, tétanos et coqueluche.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Programme élargi de vaccination"
    },
    {
      "type": "qcm",
      "text": "Quel vaccin protège contre la rougeole et la rubéole ?",
      "options": [
        "RR",
        "BCG",
        "VPO",
        "VAA"
      ],
      "answer": "RR",
      "correct": "RR",
      "explanation": "Le vaccin RR cible la rougeole et la rubéole.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Programme élargi de vaccination"
    },
    {
      "type": "qcm",
      "text": "Quel vaccin contribue à prévenir le cancer du col de l’utérus ?",
      "options": [
        "HPV",
        "BCG",
        "VPO",
        "Penta"
      ],
      "answer": "HPV",
      "correct": "HPV",
      "explanation": "La vaccination anti-HPV protège contre les types de papillomavirus responsables de nombreux cancers du col.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Programme élargi de vaccination"
    },
    {
      "type": "qcm",
      "text": "Quelle donnée est une donnée démographique lors d’une enquête communautaire ?",
      "options": [
        "Effectif de la population",
        "Principales cultures vivrières",
        "Interdits alimentaires",
        "Types de sols"
      ],
      "answer": "Effectif de la population",
      "correct": "Effectif de la population",
      "explanation": "L’effectif décrit la taille de la population et relève des données démographiques.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Étude du milieu"
    },
    {
      "type": "qcm",
      "text": "Quelle donnée est culturelle lors d’une étude du milieu ?",
      "options": [
        "Interdits alimentaires",
        "Nombre d’habitants",
        "Nombre de puits",
        "Superficie cultivée"
      ],
      "answer": "Interdits alimentaires",
      "correct": "Interdits alimentaires",
      "explanation": "Les interdits alimentaires relèvent des normes, croyances et pratiques culturelles.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Étude du milieu"
    },
    {
      "type": "qcm",
      "text": "Quelle maladie est principalement liée à une eau ou des aliments contaminés ?",
      "options": [
        "Choléra",
        "Tétanos",
        "Rougeole",
        "Rage"
      ],
      "answer": "Choléra",
      "correct": "Choléra",
      "explanation": "Le choléra se transmet surtout par ingestion d’eau ou d’aliments contaminés par Vibrio cholerae.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Maladies hydriques"
    },
    {
      "type": "qcm",
      "text": "Quelle action améliore durablement l’hygiène du milieu ?",
      "options": [
        "Évacuer correctement les déchets",
        "Jeter les ordures dans les caniveaux",
        "Laisser les eaux usées stagner",
        "Défèquer à l’air libre"
      ],
      "answer": "Évacuer correctement les déchets",
      "correct": "Évacuer correctement les déchets",
      "explanation": "La gestion correcte des déchets réduit les gîtes, les nuisances et les risques de transmission.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Assainissement"
    },
    {
      "type": "qcm",
      "text": "Quel est un objectif fondamental d’un système de santé ?",
      "options": [
        "Promouvoir et protéger la santé de la population",
        "Augmenter les maladies évitables",
        "Supprimer la prévention",
        "Réduire l’accès aux soins"
      ],
      "answer": "Promouvoir et protéger la santé de la population",
      "correct": "Promouvoir et protéger la santé de la population",
      "explanation": "Un système de santé organise la promotion, la prévention, les soins et la réadaptation au bénéfice de la population.",
      "source": "Cours SANTE PUBLIQUE AS, chapitre Système de santé"
    }
  ]
};
    const EPIDEMIOLOGIE_SUBJECTS = [
  {
    "id": "epidemiologie-etudes-cas-50q",
    "title": "Épidémiologie – Études de cas",
    "matter": "Épidémiologie",
    "description": "5 études de cas – 50 questions QCM/QCD (L1/L2 INFAS).",
    "instructions": "Lisez attentivement chaque étude de cas puis répondez aux questions.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-09-24",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcm",
        "text": "Selon le cours, l’apparition soudaine d’une maladie dans une population donnée, limitée dans le temps et dans l’espace, correspond à :",
        "options": [
          "Une endémie",
          "Une pandémie",
          "Une épidémie",
          "Une incidence"
        ],
        "explanation": "L’épidémie est une apparition soudaine, inattendue ou brusque d’une maladie dans une population donnée pendant un temps donné. Elle est limitée dans le temps et dans l’espace.",
        "source": "Cours L1 – Phénomènes de masse.",
        "answer": "Une épidémie",
        "correct": "Une épidémie",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcd",
        "text": "Parmi les éléments suivants, lesquels entrent dans la définition d’un cas suspect de rougeole ?",
        "options": [
          "Fièvre",
          "Éruption",
          "Toux",
          "Coryza",
          "Conjonctivite"
        ],
        "explanation": "Un cas suspect associe fièvre + éruption + toux ou coryza ou conjonctivite.",
        "source": "Cours L2 – Surveillance de la rougeole.",
        "answers": [
          "Fièvre",
          "Éruption",
          "Toux",
          "Coryza",
          "Conjonctivite"
        ],
        "correct": [
          "Fièvre",
          "Éruption",
          "Toux",
          "Coryza",
          "Conjonctivite"
        ],
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "Dans une population de 100 000 habitants, à partir de combien de cas suspects notifiés en un mois suspecte-t-on une épidémie de rougeole ?",
        "options": [
          "1 cas",
          "3 cas",
          "5 cas",
          "10 cas"
        ],
        "explanation": "La suspicion d’épidémie correspond à 5 cas suspects ou plus en un mois pour 100 000 habitants.",
        "source": "Cours L2 – Surveillance de la rougeole.",
        "answer": "5 cas",
        "correct": "5 cas",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "Les données du cas permettent-elles de suspecter une épidémie de rougeole ?",
        "options": [
          "Oui",
          "Non"
        ],
        "explanation": "Au moins 5 cas suspects ont été observés au cours du même mois dans une population de 100 000 habitants.",
        "source": "Cours L2 – Surveillance de la rougeole.",
        "answer": "Oui",
        "correct": "Oui",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "La présence de 3 cas confirmés avec lien épidémiologique correspond selon le cours à :",
        "options": [
          "Une absence d’épidémie",
          "Une épidémie confirmée",
          "Une endémie",
          "Une pandémie"
        ],
        "explanation": "Le cours retient 3 cas confirmés ou plus en un mois pour 100 000 habitants avec lien épidémiologique.",
        "source": "Cours L2 – Surveillance de la rougeole.",
        "answer": "Une épidémie confirmée",
        "correct": "Une épidémie confirmée",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "Le prélèvement sanguin d’un cas suspect de rougeole doit être effectué :",
        "options": [
          "Entre J1 et J3 après l’éruption",
          "Entre J4 et J28 après le début de l’éruption",
          "Entre J30 et J60",
          "Uniquement le jour de l’éruption"
        ],
        "explanation": "C’est la période indiquée dans la conduite à tenir du cours.",
        "source": "Cours L2 – CAT devant un cas suspect de rougeole.",
        "answer": "Entre J4 et J28 après le début de l’éruption",
        "correct": "Entre J4 et J28 après le début de l’éruption",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcd",
        "text": "Concernant la conduite à tenir devant un cas suspect de rougeole, sélectionner les bonnes réponses.",
        "options": [
          "Prélever le sang",
          "Remplir le formulaire de notification",
          "Préciser le statut vaccinal",
          "Préciser la date de début de l’éruption",
          "Détruire le prélèvement après 24 heures"
        ],
        "explanation": "Ces informations font partie de la conduite à tenir décrite dans le cours.",
        "source": "Cours L2 – CAT devant un cas suspect de rougeole.",
        "answers": [
          "Prélever le sang",
          "Remplir le formulaire de notification",
          "Préciser le statut vaccinal",
          "Préciser la date de début de l’éruption"
        ],
        "correct": [
          "Prélever le sang",
          "Remplir le formulaire de notification",
          "Préciser le statut vaccinal",
          "Préciser la date de début de l’éruption"
        ],
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "Le prélèvement de gorge pour la rougeole doit être réalisé :",
        "options": [
          "Entre J1 et J7",
          "Entre J8 et J14",
          "Entre J15 et J21",
          "Après J28"
        ],
        "explanation": "Le cours précise un prélèvement de gorge entre J1 et J7.",
        "source": "Cours L2 – Surveillance de la rougeole.",
        "answer": "Entre J1 et J7",
        "correct": "Entre J1 et J7",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcd",
        "text": "En situation de suspicion d’épidémie de rougeole, les activités peuvent comprendre :",
        "options": [
          "Renforcement de la surveillance",
          "Investigation",
          "Prise en charge des cas",
          "Mobilisation sociale",
          "Vaccination des enfants de 6 à 59 mois non vaccinés"
        ],
        "explanation": "Toutes ces activités figurent parmi les mesures indiquées dans le cours.",
        "source": "Cours L2 – Mesures de contrôle et prévention.",
        "answers": [
          "Renforcement de la surveillance",
          "Investigation",
          "Prise en charge des cas",
          "Mobilisation sociale",
          "Vaccination des enfants de 6 à 59 mois non vaccinés"
        ],
        "correct": [
          "Renforcement de la surveillance",
          "Investigation",
          "Prise en charge des cas",
          "Mobilisation sociale",
          "Vaccination des enfants de 6 à 59 mois non vaccinés"
        ],
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "L’étude de la répartition des cas selon le temps, le lieu et les personnes relève principalement de :",
        "options": [
          "L’épidémiologie analytique",
          "L’épidémiologie descriptive",
          "L’épidémiologie expérimentale",
          "L’approche clinique"
        ],
        "explanation": "L’épidémiologie descriptive étudie la fréquence et la répartition selon le temps, l’espace et les caractéristiques de la population.",
        "source": "Cours L1 – Épidémiologie descriptive.",
        "answer": "L’épidémiologie descriptive",
        "correct": "L’épidémiologie descriptive",
        "caseContext": "ÉTUDE DE CAS N°1 — ÉPIDÉMIE DE ROUGEOLE\nLe Centre de Santé de Kouassi-Kro dessert une population de 100 000 habitants. Au cours du mois de mars 2026, l’équipe sanitaire enregistre 8 personnes présentant une fièvre associée à une éruption cutanée. Parmi elles, 6 présentent également une toux ou un coryza. Les prélèvements réalisés montrent que 3 cas sont positifs aux IgM rougeole et présentent un lien épidémiologique.\n\nL’équipe décide de renforcer la surveillance et d’organiser les premières mesures de contrôle."
      },
      {
        "type": "qcm",
        "text": "L’incidence correspond :",
        "options": [
          "Au nombre total des anciens et nouveaux cas",
          "Au nombre de nouveaux cas",
          "Au nombre de décès",
          "Au nombre de guérisons"
        ],
        "explanation": "L’incidence est le nombre de nouveaux cas d’une maladie en un an.",
        "source": "Cours L2 – Indicateurs de morbidité.",
        "answer": "Au nombre de nouveaux cas",
        "correct": "Au nombre de nouveaux cas",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Le taux d’incidence du paludisme pour 1 000 habitants est :",
        "options": [
          "2 ‰",
          "20 ‰",
          "30 ‰",
          "40 ‰"
        ],
        "explanation": "400 / 20 000 × 1 000 = 20 ‰.",
        "source": "Cours L2 – Taux d’incidence.",
        "answer": "20 ‰",
        "correct": "20 ‰",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "La prévalence correspond :",
        "options": [
          "Aux nouveaux cas uniquement",
          "Aux décès uniquement",
          "Aux anciens et nouveaux cas présents à un instant précis",
          "Aux personnes guéries"
        ],
        "explanation": "La prévalence inclut les anciens et nouveaux cas présents à un instant précis.",
        "source": "Cours L2 – Prévalence.",
        "answer": "Aux anciens et nouveaux cas présents à un instant précis",
        "correct": "Aux anciens et nouveaux cas présents à un instant précis",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "La prévalence du paludisme pour 1 000 habitants est :",
        "options": [
          "20 ‰",
          "25 ‰",
          "30 ‰",
          "60 ‰"
        ],
        "explanation": "600 / 20 000 × 1 000 = 30 ‰.",
        "source": "Cours L2 – Prévalence.",
        "answer": "30 ‰",
        "correct": "30 ‰",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Le taux brut de morbidité pour 100 habitants est :",
        "options": [
          "8 %",
          "10 %",
          "12,5 %",
          "20 %"
        ],
        "explanation": "2 500 / 20 000 × 100 = 12,5 %.",
        "source": "Cours L2 – Taux brut de morbidité.",
        "answer": "12,5 %",
        "correct": "12,5 %",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Le taux brut de mortalité pour 1 000 habitants est :",
        "options": [
          "5 ‰",
          "10 ‰",
          "20 ‰",
          "25 ‰"
        ],
        "explanation": "200 / 20 000 × 1 000 = 10 ‰.",
        "source": "Cours L2 – Taux brut de mortalité.",
        "answer": "10 ‰",
        "correct": "10 ‰",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Le taux de mortalité spécifique par paludisme pour 1 000 habitants est :",
        "options": [
          "0,5 ‰",
          "1 ‰",
          "2 ‰",
          "5 ‰"
        ],
        "explanation": "20 / 20 000 × 1 000 = 1 ‰.",
        "source": "Cours L2 – Taux de mortalité spécifique.",
        "answer": "1 ‰",
        "correct": "1 ‰",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Le taux de létalité du paludisme est :",
        "options": [
          "2 %",
          "5 %",
          "10 %",
          "20 %"
        ],
        "explanation": "20 / 400 × 100 = 5 %.",
        "source": "Cours L2 – Taux de létalité.",
        "answer": "5 %",
        "correct": "5 %",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcd",
        "text": "Quels indicateurs appartiennent aux indicateurs de morbidité ?",
        "options": [
          "Incidence",
          "Prévalence",
          "Taux brut de morbidité",
          "Taux de létalité",
          "Taux brut de natalité"
        ],
        "explanation": "Le cours classe l’incidence, la prévalence et le taux brut de morbidité parmi les indicateurs de morbidité.",
        "source": "Cours L2 – Indicateurs de morbidité.",
        "answers": [
          "Incidence",
          "Prévalence",
          "Taux brut de morbidité"
        ],
        "correct": [
          "Incidence",
          "Prévalence",
          "Taux brut de morbidité"
        ],
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Le taux de létalité permet surtout d’apprécier :",
        "options": [
          "La fréquence des naissances",
          "La gravité d’une maladie",
          "La fécondité",
          "La migration"
        ],
        "explanation": "La létalité permet d’apprécier la gravité d’une maladie.",
        "source": "Cours L2 – Létalité.",
        "answer": "La gravité d’une maladie",
        "correct": "La gravité d’une maladie",
        "caseContext": "ÉTUDE DE CAS N°2 — INDICATEURS DE MORBIDITÉ ET DE MORTALITÉ\nUne aire sanitaire compte 20 000 habitants. Au cours de l’année 2025, les services sanitaires ont enregistré :\n• 2 500 personnes malades toutes causes confondues ;\n• 400 nouveaux cas de paludisme ;\n• 600 personnes vivant avec le paludisme à une date donnée, anciens et nouveaux cas compris ;\n• 20 décès dus au paludisme ;\n• 200 décès toutes causes confondues."
      },
      {
        "type": "qcm",
        "text": "Selon les proportions utilisées dans le cours, le nombre de grossesses attendues est :",
        "options": [
          "1 050",
          "1 200",
          "1 500",
          "3 000"
        ],
        "explanation": "30 000 × 5 % = 1 500.",
        "source": "Cours L2 – Proportions des populations cibles.",
        "answer": "1 500",
        "correct": "1 500",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Le nombre de naissances attendues est :",
        "options": [
          "750",
          "1 050",
          "1 200",
          "1 500"
        ],
        "explanation": "30 000 × 3,5 % = 1 050.",
        "source": "Cours L2 – Proportions des populations cibles.",
        "answer": "1 050",
        "correct": "1 050",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Le taux d’accouchements assistés est :",
        "options": [
          "60 %",
          "70 %",
          "80 %",
          "90 %"
        ],
        "explanation": "1 200 / 1 500 × 100 = 80 %.",
        "source": "Cours L2 – Taux d’accouchement assisté.",
        "answer": "80 %",
        "correct": "80 %",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Le taux général de fécondité pour 1 000 FAR est :",
        "options": [
          "100 ‰",
          "120 ‰",
          "140 ‰",
          "150 ‰"
        ],
        "explanation": "1 050 / 7 500 × 1 000 = 140 ‰.",
        "source": "Cours L2 – Taux général de fécondité.",
        "answer": "140 ‰",
        "correct": "140 ‰",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "L’accroissement naturel est :",
        "options": [
          "300 habitants",
          "550 habitants",
          "750 habitants",
          "1 050 habitants"
        ],
        "explanation": "1 050 − 300 = 750 habitants.",
        "source": "Cours L2 – Accroissement naturel.",
        "answer": "750 habitants",
        "correct": "750 habitants",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Le taux brut de natalité pour 1 000 habitants est :",
        "options": [
          "25 ‰",
          "30 ‰",
          "35 ‰",
          "40 ‰"
        ],
        "explanation": "1 050 / 30 000 × 1 000 = 35 ‰.",
        "source": "Cours L2 – Taux brut de natalité.",
        "answer": "35 ‰",
        "correct": "35 ‰",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Le taux de mortalité infantile est approximativement :",
        "options": [
          "13,3 ‰",
          "23,3 ‰",
          "33,3 ‰",
          "43,3 ‰"
        ],
        "explanation": "35 / 1 050 × 1 000 ≈ 33,3 ‰.",
        "source": "Cours L2 – Taux de mortalité infantile.",
        "answer": "33,3 ‰",
        "correct": "33,3 ‰",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Le taux de mortalité maternelle est approximativement :",
        "options": [
          "19 pour 100 000 NV",
          "95 pour 100 000 NV",
          "190 pour 100 000 NV",
          "1 900 pour 100 000 NV"
        ],
        "explanation": "2 / 1 050 × 100 000 ≈ 190,5 pour 100 000 NV.",
        "source": "Cours L2 – Taux de mortalité maternelle.",
        "answer": "190 pour 100 000 NV",
        "correct": "190 pour 100 000 NV",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcd",
        "text": "Lesquels sont des indicateurs de santé à tendance positive ?",
        "options": [
          "Taux brut de natalité",
          "Accroissement naturel",
          "Incidence",
          "Prévalence",
          "Mortalité"
        ],
        "explanation": "Le taux brut de natalité et l’accroissement naturel sont des indicateurs à tendance positive.",
        "source": "Cours L1/L2 – Groupes d’indicateurs de santé.",
        "answers": [
          "Taux brut de natalité",
          "Accroissement naturel"
        ],
        "correct": [
          "Taux brut de natalité",
          "Accroissement naturel"
        ],
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Les indicateurs de mortalité appartiennent :",
        "options": [
          "Aux indicateurs à tendance positive",
          "Aux indicateurs à tendance négative",
          "Aux indicateurs démographiques exclusivement",
          "Aux facteurs environnementaux"
        ],
        "explanation": "Les indicateurs à tendance négative mesurent la maladie et les décès.",
        "source": "Cours L1/L2 – Groupes d’indicateurs.",
        "answer": "Aux indicateurs à tendance négative",
        "correct": "Aux indicateurs à tendance négative",
        "caseContext": "ÉTUDE DE CAS N°3 — POPULATION ET INDICATEURS DE SANTÉ\nLa localité de N’Guessankro compte 30 000 habitants en 2026. Au cours de cette année, elle enregistre :\n• 1 050 naissances vivantes ;\n• 300 décès toutes causes confondues ;\n• 1 200 accouchements assistés ;\n• une population de femmes en âge de reproduction de 7 500 ;\n• 35 décès d’enfants de moins d’un an ;\n• 2 décès maternels."
      },
      {
        "type": "qcm",
        "text": "Ce tableau doit faire suspecter en priorité :",
        "options": [
          "Une rougeole",
          "Une PFA",
          "Une fièvre jaune",
          "Un tétanos néonatal"
        ],
        "explanation": "La survenue brusque d’une paralysie avec membre flasque correspond aux caractéristiques d’une PFA.",
        "source": "Cours L2 – Surveillance des PFA.",
        "answer": "Une PFA",
        "correct": "Une PFA",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcd",
        "text": "Les caractéristiques communautaires d’une PFA comprennent :",
        "options": [
          "Survenue brusque de la paralysie",
          "Faiblesse résiduelle des membres",
          "Incapacité à marcher",
          "Membre flasque",
          "Éruption cutanée obligatoire"
        ],
        "explanation": "Ces caractéristiques sont citées dans la définition communautaire de la PFA.",
        "source": "Cours L2 – Surveillance des PFA.",
        "answers": [
          "Survenue brusque de la paralysie",
          "Faiblesse résiduelle des membres",
          "Incapacité à marcher",
          "Membre flasque"
        ],
        "correct": [
          "Survenue brusque de la paralysie",
          "Faiblesse résiduelle des membres",
          "Incapacité à marcher",
          "Membre flasque"
        ],
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "La première action devant ce cas est :",
        "options": [
          "Attendre 14 jours",
          "Notifier immédiatement",
          "Attendre la guérison",
          "Vacciner uniquement la mère"
        ],
        "explanation": "La notification immédiate fait partie de la conduite à tenir.",
        "source": "Cours L2 – CAT devant une PFA.",
        "answer": "Notifier immédiatement",
        "correct": "Notifier immédiatement",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "Combien d’échantillons de selles faut-il recueillir ?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "explanation": "Le cours prévoit deux échantillons de selles.",
        "source": "Cours L2 – CAT devant une PFA.",
        "answer": "2",
        "correct": "2",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "Les deux prélèvements doivent être espacés de :",
        "options": [
          "1 à 2 heures",
          "6 à 12 heures",
          "24 à 48 heures",
          "7 jours"
        ],
        "explanation": "Les deux échantillons sont recueillis à un intervalle d’au moins 24 à 48 heures.",
        "source": "Cours L2 – CAT devant une PFA.",
        "answer": "24 à 48 heures",
        "correct": "24 à 48 heures",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "Les prélèvements doivent idéalement être effectués :",
        "options": [
          "Dans les 14 jours suivant le début de la paralysie",
          "Après 30 jours",
          "Après 60 jours",
          "Après 6 mois"
        ],
        "explanation": "Le cours fixe ce délai pour le prélèvement des selles.",
        "source": "Cours L2 – CAT devant une PFA.",
        "answer": "Dans les 14 jours suivant le début de la paralysie",
        "correct": "Dans les 14 jours suivant le début de la paralysie",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "La température de transport indiquée dans le cours est :",
        "options": [
          "−20 °C",
          "0 °C",
          "+2 à +8 °C",
          "+20 à +30 °C"
        ],
        "explanation": "Les échantillons sont expédiés dans un porte-vaccins entre +2 °C et +8 °C.",
        "source": "Cours L2 – CAT devant une PFA.",
        "answers": [
          "+2 à +8 °C",
          "+2 à +8 °C"
        ],
        "correct": [
          "+2 à +8 °C",
          "+2 à +8 °C"
        ],
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "Le prélèvement doit parvenir au laboratoire IPCI dans un délai de :",
        "options": [
          "24 heures obligatoirement",
          "3 jours après la collecte",
          "7 jours",
          "14 jours"
        ],
        "explanation": "Le cours indique un délai de 3 jours après la collecte.",
        "source": "Cours L2 – CAT devant une PFA.",
        "answer": "3 jours après la collecte",
        "correct": "3 jours après la collecte",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "La cible du taux de PFA non poliomyélitique est :",
        "options": [
          "≥ 1 cas/1 000 habitants",
          "≥ 2 cas/100 000 moins de 15 ans",
          "≥ 5 cas/10 000 moins de 5 ans",
          "≥ 10 cas/100 000 habitants"
        ],
        "explanation": "C’est la cible de surveillance indiquée dans le cours.",
        "source": "Cours L2 – Indicateurs de surveillance des PFA.",
        "answer": "≥ 2 cas/100 000 moins de 15 ans",
        "correct": "≥ 2 cas/100 000 moins de 15 ans",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "La cible concernant la proportion d’échantillons prélevés dans les 14 jours est :",
        "options": [
          "≥ 50 %",
          "≥ 60 %",
          "≥ 70 %",
          "≥ 80 %"
        ],
        "explanation": "Le cours fixe la cible à au moins 80 %.",
        "source": "Cours L2 – Indicateurs de surveillance des PFA.",
        "answer": "≥ 80 %",
        "correct": "≥ 80 %",
        "caseContext": "ÉTUDE DE CAS N°4 — PARALYSIE FLASQUE AIGUË (PFA)\nUn garçon de 7 ans, jusque-là capable de marcher normalement, présente brutalement une faiblesse du membre inférieur droit. La mère rapporte que la jambe est devenue « molle » et que l’enfant éprouve des difficultés à se tenir debout. Il est reçu au centre de santé 5 jours après le début de la paralysie."
      },
      {
        "type": "qcm",
        "text": "Ce patient correspond selon le cours à :",
        "options": [
          "Un cas suspect de fièvre jaune",
          "Un cas confirmé automatiquement",
          "Un cas de rougeole",
          "Un cas de PFA"
        ],
        "explanation": "Un cas suspect présente une fièvre d’apparition brusque avec ictère apparaissant dans les 14 jours du début des symptômes.",
        "source": "Cours L2 – Surveillance de la fièvre jaune.",
        "answer": "Un cas suspect de fièvre jaune",
        "correct": "Un cas suspect de fièvre jaune",
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcm",
        "text": "La notification du cas doit être :",
        "options": [
          "Mensuelle",
          "Trimestrielle",
          "Immédiate",
          "Facultative"
        ],
        "explanation": "La conduite à tenir prévoit une notification immédiate au district sanitaire.",
        "source": "Cours L2 – CAT devant un cas suspect de fièvre jaune.",
        "answer": "Immédiate",
        "correct": "Immédiate",
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcd",
        "text": "Devant ce cas suspect, il faut notamment :",
        "options": [
          "Notifier le district sanitaire",
          "Remplir la fiche de notification",
          "Effectuer un prélèvement sanguin",
          "Réaliser une investigation",
          "Ignorer les facteurs environnementaux"
        ],
        "explanation": "Ces mesures figurent dans la conduite à tenir du cours.",
        "source": "Cours L2 – CAT devant un cas suspect de fièvre jaune.",
        "answers": [
          "Notifier le district sanitaire",
          "Remplir la fiche de notification",
          "Effectuer un prélèvement sanguin",
          "Réaliser une investigation"
        ],
        "correct": [
          "Notifier le district sanitaire",
          "Remplir la fiche de notification",
          "Effectuer un prélèvement sanguin",
          "Réaliser une investigation"
        ],
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcm",
        "text": "Le prélèvement sanguin est prévu :",
        "options": [
          "Entre 1 et 3 jours après l’ictère",
          "Entre 7 et 45 jours après l’apparition de l’ictère",
          "Après 60 jours",
          "Uniquement après guérison"
        ],
        "explanation": "C’est la période indiquée dans le cours.",
        "source": "Cours L2 – CAT devant un cas suspect de fièvre jaune.",
        "answer": "Entre 7 et 45 jours après l’apparition de l’ictère",
        "correct": "Entre 7 et 45 jours après l’apparition de l’ictère",
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcm",
        "text": "Selon le cours, une épidémie de fièvre jaune est définie par :",
        "options": [
          "10 cas suspects",
          "5 cas probables",
          "Au moins un cas confirmé au laboratoire",
          "100 cas suspects"
        ],
        "explanation": "Le cours définit l’épidémie par la survenue d’au moins un cas confirmé au laboratoire.",
        "source": "Cours L2 – Fièvre jaune.",
        "answer": "Au moins un cas confirmé au laboratoire",
        "correct": "Au moins un cas confirmé au laboratoire",
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcd",
        "text": "L’investigation d’un cas de fièvre jaune doit notamment permettre d’apprécier :",
        "options": [
          "L’ampleur de l’épidémie",
          "La zone à risque",
          "Les personnes à risque",
          "Uniquement le groupe sanguin du patient"
        ],
        "explanation": "L’investigation recherche notamment l’ampleur, la zone et les personnes à risque.",
        "source": "Cours L2 – Fièvre jaune.",
        "answers": [
          "L’ampleur de l’épidémie",
          "La zone à risque",
          "Les personnes à risque"
        ],
        "correct": [
          "L’ampleur de l’épidémie",
          "La zone à risque",
          "Les personnes à risque"
        ],
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcd",
        "text": "Parmi les mesures prévues dans le cours figurent :",
        "options": [
          "Investigation clinique",
          "Investigation épidémiologique",
          "Investigation entomologique",
          "Vaccination de masse réactive selon les conclusions",
          "Mesures de lutte antivectorielle"
        ],
        "explanation": "Toutes ces mesures sont mentionnées dans le cours.",
        "source": "Cours L2 – Fièvre jaune.",
        "answers": [
          "Investigation clinique",
          "Investigation épidémiologique",
          "Investigation entomologique",
          "Vaccination de masse réactive selon les conclusions",
          "Mesures de lutte antivectorielle"
        ],
        "correct": [
          "Investigation clinique",
          "Investigation épidémiologique",
          "Investigation entomologique",
          "Vaccination de masse réactive selon les conclusions",
          "Mesures de lutte antivectorielle"
        ],
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcm",
        "text": "La surveillance épidémiologique correspond notamment à :",
        "options": [
          "La collecte systématique et continue des données sanitaires",
          "La prise en charge d’un seul malade",
          "La prescription systématique d’antibiotiques",
          "L’hospitalisation de toute la population"
        ],
        "explanation": "La surveillance repose sur la collecte continue, l’analyse et l’interprétation des données sanitaires.",
        "source": "Cours L1 – Surveillance épidémiologique.",
        "answer": "La collecte systématique et continue des données sanitaires",
        "correct": "La collecte systématique et continue des données sanitaires",
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcd",
        "text": "La surveillance épidémiologique permet notamment de :",
        "options": [
          "Connaître l’incidence d’une maladie",
          "Étudier sa diffusion temporelle et spatiale",
          "Disposer d’indicateurs d’alerte",
          "Connaître les facteurs de risque",
          "Évaluer les actions de prévention"
        ],
        "explanation": "Tous ces objectifs figurent dans le cours.",
        "source": "Cours L1 – Buts de la surveillance épidémiologique.",
        "answers": [
          "Connaître l’incidence d’une maladie",
          "Étudier sa diffusion temporelle et spatiale",
          "Disposer d’indicateurs d’alerte",
          "Connaître les facteurs de risque",
          "Évaluer les actions de prévention"
        ],
        "correct": [
          "Connaître l’incidence d’une maladie",
          "Étudier sa diffusion temporelle et spatiale",
          "Disposer d’indicateurs d’alerte",
          "Connaître les facteurs de risque",
          "Évaluer les actions de prévention"
        ],
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      },
      {
        "type": "qcm",
        "text": "L’ensemble des actions mises en œuvre pour résoudre un problème ou modifier une situation non satisfaisante est appelé :",
        "options": [
          "Prévalence",
          "Incidence",
          "Riposte",
          "Proportion"
        ],
        "explanation": "C’est la définition de la riposte donnée dans le cours.",
        "source": "Cours L1 – Riposte.",
        "answer": "Riposte",
        "correct": "Riposte",
        "caseContext": "ÉTUDE DE CAS N°5 — FIÈVRE JAUNE ET SURVEILLANCE ÉPIDÉMIOLOGIQUE\nUn homme de 32 ans se présente dans une formation sanitaire avec une fièvre d’apparition brusque. Quelques jours plus tard apparaît un ictère, soit 8 jours après le début des symptômes. L’infirmier soupçonne une fièvre jaune et informe le responsable de la formation sanitaire."
      }
    ]
  },
  {
    "id": "epidemiologie-l1-l2-60q",
    "title": "Épidémiologie L1-L2 – 60 questions",
    "matter": "Épidémiologie",
    "description": "60 questions QCM/QCD d’épidémiologie L1 et L2 INFAS.",
    "instructions": "Répondez à toutes les questions. Certaines questions peuvent avoir plusieurs bonnes réponses.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-09-24",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcm",
        "text": "L’épidémiologie est une discipline scientifique qui étudie principalement :",
        "options": [
          "Uniquement le traitement des maladies",
          "La distribution et les déterminants des états de santé et des maladies dans les populations humaines",
          "Uniquement les maladies transmissibles",
          "Les techniques chirurgicales"
        ],
        "explanation": "Elle étudie la distribution et les déterminants des états de santé et des maladies dans les populations humaines.",
        "source": "Santé publique L1 — Généralités sur l’épidémiologie, Définition, p.110.",
        "answer": "La distribution et les déterminants des états de santé et des maladies dans les populations humaines",
        "correct": "La distribution et les déterminants des états de santé et des maladies dans les populations humaines"
      },
      {
        "type": "qcd",
        "text": "L’épidémiologie est un instrument permettant d’améliorer la santé publique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours présente l’épidémiologie comme l’un des instruments permettant d’améliorer la santé publique.",
        "source": "Santé publique L1 — Généralités sur l’épidémiologie, p.111.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Parmi les propositions suivantes, laquelle constitue un but de l’épidémiologie ?",
        "options": [
          "Identifier les agents pathogènes et les facteurs de risque",
          "Réaliser systématiquement une intervention chirurgicale",
          "Prescrire des médicaments à chaque malade",
          "Assurer uniquement la guérison individuelle"
        ],
        "explanation": "L’identification des agents pathogènes, modes de transmission et facteurs de risque fait partie des buts du cours.",
        "source": "Santé publique L1 — Buts de l’épidémiologie, p.111.",
        "answer": "Identifier les agents pathogènes et les facteurs de risque",
        "correct": "Identifier les agents pathogènes et les facteurs de risque"
      },
      {
        "type": "qcm",
        "text": "Le cours distingue combien de grands domaines d’application de l’épidémiologie ?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "explanation": "Il distingue l’épidémiologie des maladies transmissibles et celle des maladies non transmissibles.",
        "source": "Santé publique L1 — Domaines d’application, p.111.",
        "answer": "2",
        "correct": "2"
      },
      {
        "type": "qcd",
        "text": "La malnutrition est citée comme exemple de problème non transmissible.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le support donne la rougeole comme exemple transmissible et la malnutrition comme exemple non transmissible.",
        "source": "Santé publique L1 — Domaines d’application, p.111.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "L’épidémiologie descriptive répond notamment aux questions :",
        "options": [
          "Pourquoi ? Comment traiter ?",
          "Quand ? Où ? Qui ? Combien ?",
          "Quel médicament ? Quelle dose ?",
          "Pourquoi ? Avec quel traitement ?"
        ],
        "explanation": "Elle décrit la fréquence et la répartition selon le temps, le lieu et les caractéristiques de la population.",
        "source": "Santé publique L1 — Épidémiologie descriptive, p.112.",
        "answer": "Quand ? Où ? Qui ? Combien ?",
        "correct": "Quand ? Où ? Qui ? Combien ?"
      },
      {
        "type": "qcd",
        "text": "L’épidémiologie analytique cherche notamment à expliquer pourquoi un problème de santé survient.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Elle recherche les causes et les liens avec les facteurs de risque et répond à la question « Pourquoi ? ».",
        "source": "Santé publique L1 — Épidémiologie analytique, p.112.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "L’épidémiologie évaluative a pour rôle principal de :",
        "options": [
          "Décrire uniquement les malades",
          "Rechercher uniquement les causes",
          "Évaluer le bien-fondé des mesures prises pour améliorer l’état de santé",
          "Diagnostiquer individuellement les patients"
        ],
        "explanation": "Elle évalue le bien-fondé ou non des mesures prises pour améliorer l’état de santé de la population.",
        "source": "Santé publique L1 — Épidémiologie évaluative, p.112.",
        "answer": "Évaluer le bien-fondé des mesures prises pour améliorer l’état de santé",
        "correct": "Évaluer le bien-fondé des mesures prises pour améliorer l’état de santé"
      },
      {
        "type": "qcm",
        "text": "Dans l’approche épidémiologique, le sujet d’intérêt est :",
        "options": [
          "Le malade",
          "La maladie",
          "Le médicament",
          "Le médecin"
        ],
        "explanation": "Le tableau du cours oppose la maladie, objet de l’approche épidémiologique, au malade, objet de l’approche clinique.",
        "source": "Santé publique L1 — Approche épidémiologique et clinique, p.113.",
        "answer": "La maladie",
        "correct": "La maladie"
      },
      {
        "type": "qcd",
        "text": "Une épidémie est limitée dans le temps et dans l’espace.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours définit l’épidémie comme une apparition soudaine dans une population donnée, limitée dans le temps et l’espace.",
        "source": "Santé publique L1 — Phénomènes de masse, p.113.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Une maladie qui sévit de manière permanente, continue et constante dans une zone donnée correspond à :",
        "options": [
          "Une pandémie",
          "Une épidémie",
          "Une endémie",
          "Une incidence"
        ],
        "explanation": "L’endémie est illimitée dans le temps mais limitée dans l’espace.",
        "source": "Santé publique L1 — Endémie, p.114.",
        "answer": "Une endémie",
        "correct": "Une endémie"
      },
      {
        "type": "qcm",
        "text": "Une pandémie est :",
        "options": [
          "Limitée dans le temps et l’espace",
          "Illimitée dans le temps et limitée dans l’espace",
          "Limitée dans le temps et illimitée dans l’espace",
          "Illimitée dans le temps et l’espace"
        ],
        "explanation": "Le tableau du cours caractérise la pandémie par un temps limité et un espace illimité.",
        "source": "Santé publique L1 — Pandémie, p.114.",
        "answer": "Limitée dans le temps et illimitée dans l’espace",
        "correct": "Limitée dans le temps et illimitée dans l’espace"
      },
      {
        "type": "qcd",
        "text": "Dans une proportion, le numérateur est inclus dans le dénominateur.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Une proportion est un rapport dont le numérateur est inclus dans le dénominateur.",
        "source": "Santé publique L1 — Proportion, p.115.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Quel élément caractérise particulièrement un taux ?",
        "options": [
          "Il ne comporte jamais de dénominateur",
          "Il induit une notion de temps et de risque",
          "Son numérateur n’est jamais inclus dans le dénominateur",
          "Il est toujours exprimé en nombre absolu"
        ],
        "explanation": "Le taux représente une probabilité de survenue au cours d’une période et induit les notions de temps et de risque.",
        "source": "Santé publique L1 — Taux, p.115.",
        "answer": "Il induit une notion de temps et de risque",
        "correct": "Il induit une notion de temps et de risque"
      },
      {
        "type": "qcm",
        "text": "Le contrôle d’une maladie correspond :",
        "options": [
          "À l’élimination totale de la maladie et de son germe",
          "À des mesures bloquant la propagation de la maladie dans la communauté",
          "À la disparition obligatoire de l’agent pathogène",
          "À l’absence définitive de tout risque de recontamination"
        ],
        "explanation": "Le contrôle bloque la propagation sans éliminer entièrement l’agent pathogène de l’environnement.",
        "source": "Santé publique L1 — Contrôle d’une maladie, p.116.",
        "answer": "À des mesures bloquant la propagation de la maladie dans la communauté",
        "correct": "À des mesures bloquant la propagation de la maladie dans la communauté"
      },
      {
        "type": "qcd",
        "text": "Lors de l’éradication d’une maladie, la maladie et le germe en cause sont supprimés.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "L’éradication vise l’élimination totale de la maladie et de son germe.",
        "source": "Santé publique L1 — Éradication, p.116.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Les indicateurs de santé à tendance négative comprennent :",
        "options": [
          "La natalité et la fécondité",
          "La morbidité et la mortalité",
          "La natalité et la mortalité",
          "La fécondité et l’accroissement naturel"
        ],
        "explanation": "Ils mesurent la maladie et les décès : indicateurs de morbidité et de mortalité.",
        "source": "Santé publique L1 — Indicateurs de santé, p.117.",
        "answer": "La morbidité et la mortalité",
        "correct": "La morbidité et la mortalité"
      },
      {
        "type": "qcm",
        "text": "Selon le cours, la proportion des enfants de 0 à 11 mois utilisée en Côte d’Ivoire est de :",
        "options": [
          "3,5 %",
          "4 %",
          "5 %",
          "17,32 %"
        ],
        "explanation": "Le tableau des cibles fixe les enfants de 0 à 11 mois à 4 % de la population totale.",
        "source": "Santé publique L2 — Proportions des cibles, p.37.",
        "answer": "4 %",
        "correct": "4 %"
      },
      {
        "type": "qcm",
        "text": "Les grossesses attendues représentent :",
        "options": [
          "3,5 %",
          "4 %",
          "5 %",
          "20 %"
        ],
        "explanation": "Le tableau du cours retient 5 % de la population totale pour les grossesses attendues.",
        "source": "Santé publique L2 — Proportions des cibles, p.37.",
        "answer": "5 %",
        "correct": "5 %"
      },
      {
        "type": "qcd",
        "text": "L’accroissement naturel tient compte de l’immigration et de l’émigration.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "L’accroissement naturel est Naissances − Décès et ne tient pas compte des phénomènes migratoires.",
        "source": "Santé publique L2 — Accroissement naturel, pp.38-39.",
        "answer": "Faux",
        "correct": "Faux"
      },
      {
        "type": "qcm",
        "text": "La formule de projection d’une population donnée dans le cours est :",
        "options": [
          "Pt = Po × r",
          "Pt = Po (1 + r)ᵗ",
          "Pt = Po ÷ r",
          "Pt = Po + 70/r"
        ],
        "explanation": "Le cours donne la formule Pt = Po (1 + r)ᵗ pour actualiser une population.",
        "source": "Santé publique L2 — Projection de population, p.40.",
        "answer": "Pt = Po (1 + r)ᵗ",
        "correct": "Pt = Po (1 + r)ᵗ"
      },
      {
        "type": "qcm",
        "text": "Le temps de dédoublement d’une population se calcule par :",
        "options": [
          "TAA ÷ 70",
          "100 ÷ TAA",
          "70 ÷ TAA en %",
          "Population × TAA"
        ],
        "explanation": "Le temps de dédoublement est égal à 70 divisé par le TAA exprimé en pourcentage.",
        "source": "Santé publique L2 — Dédoublement, p.40.",
        "answer": "70 ÷ TAA en %",
        "correct": "70 ÷ TAA en %"
      },
      {
        "type": "qcd",
        "text": "L’incidence correspond au nombre de nouveaux cas d’une maladie en un an.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours définit l’incidence comme le nombre de nouveaux cas d’une maladie en un an.",
        "source": "Santé publique L2 — Incidence, p.41.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "La prévalence prend en compte :",
        "options": [
          "Uniquement les nouveaux cas",
          "Uniquement les anciens cas",
          "Les anciens et les nouveaux cas",
          "Uniquement les décès"
        ],
        "explanation": "Elle correspond au total des individus malades à un instant précis, anciens et nouveaux cas.",
        "source": "Santé publique L2 — Prévalence, p.41.",
        "answer": "Les anciens et les nouveaux cas",
        "correct": "Les anciens et les nouveaux cas"
      },
      {
        "type": "qcm",
        "text": "Le taux de létalité permet principalement d’apprécier :",
        "options": [
          "La fréquence des naissances",
          "La gravité d’une maladie",
          "L’accroissement d’une population",
          "La fréquence des vaccinations"
        ],
        "explanation": "La létalité permet d’apprécier la gravité d’une maladie en rapportant les décès dus à cette maladie au nombre de cas.",
        "source": "Santé publique L2 — Létalité, p.42.",
        "answer": "La gravité d’une maladie",
        "correct": "La gravité d’une maladie"
      },
      {
        "type": "qcm",
        "text": "Devant un cas de PFA, combien d’échantillons de selles doivent être recueillis ?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "explanation": "Le cours demande deux échantillons de selles de 8 à 10 g à 24-48 heures d’intervalle dans les 14 jours après le début de la paralysie.",
        "source": "Santé publique L2 — Surveillance des PFA, p.92.",
        "answer": "2",
        "correct": "2"
      },
      {
        "type": "qcd",
        "text": "La cible du taux de PFA non poliomyélitique est ≥ 2 cas pour 100 000 personnes de moins de 15 ans.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "C’est la cible de surveillance indiquée dans le support.",
        "source": "Santé publique L2 — Indicateurs de surveillance des PFA, p.92.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Chez l’agent de santé, un cas suspect de rougeole correspond notamment à :",
        "options": [
          "Fièvre + éruption + toux ou coryza ou conjonctivite",
          "Fièvre + ictère uniquement",
          "Paralysie + fièvre",
          "Diarrhée + vomissements"
        ],
        "explanation": "C’est l’une des définitions du cas suspect de rougeole dans le cours.",
        "source": "Santé publique L2 — Surveillance de la rougeole, p.93.",
        "answer": "Fièvre + éruption + toux ou coryza ou conjonctivite",
        "correct": "Fièvre + éruption + toux ou coryza ou conjonctivite"
      },
      {
        "type": "qcm",
        "text": "Selon le cours, une épidémie de fièvre jaune est définie par :",
        "options": [
          "Au moins 10 cas suspects",
          "Au moins 5 cas probables",
          "Au moins un cas confirmé au laboratoire",
          "Au moins 3 décès"
        ],
        "explanation": "La survenue d’au moins un cas confirmé au laboratoire définit une épidémie de fièvre jaune.",
        "source": "Santé publique L2 — Surveillance de la fièvre jaune, p.95.",
        "answer": "Au moins un cas confirmé au laboratoire",
        "correct": "Au moins un cas confirmé au laboratoire"
      },
      {
        "type": "qcd",
        "text": "Devant un cas de tétanos néonatal, un prélèvement biologique est obligatoire pour confirmer le diagnostic.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "La classification est purement clinique et le cours précise qu’il n’y a pas de prélèvement à faire.",
        "source": "Santé publique L2 — Surveillance du tétanos néonatal, p.96.",
        "answer": "Faux",
        "correct": "Faux"
      },
      {
        "type": "qcm",
        "text": "La fréquence absolue correspond à :",
        "options": [
          "Un pourcentage de malades",
          "Un dénombrement des cas dans une population pendant une période donnée",
          "Un rapport entre deux populations différentes",
          "Une estimation du risque de décès"
        ],
        "explanation": "Elle constitue un dénombrement des cas de maladies dans une population donnée au cours d’une période donnée.",
        "source": "Santé publique L1 — Fréquence absolue, p.114.",
        "answer": "Un dénombrement des cas dans une population pendant une période donnée",
        "correct": "Un dénombrement des cas dans une population pendant une période donnée"
      },
      {
        "type": "qcd",
        "text": "La fréquence relative comporte un numérateur et un dénominateur et peut être exprimée en pourcentage.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Elle indique l’importance d’une affection dans l’ensemble des affections et peut être décimale ou en pourcentage.",
        "source": "Santé publique L1 — Fréquence relative, p.114.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Un rapport peut être :",
        "options": [
          "Une proportion, un taux, un ratio ou un indice",
          "Uniquement un taux",
          "Uniquement une proportion",
          "Une incidence uniquement"
        ],
        "explanation": "Le cours classe proportion, taux, ratio et indice parmi les formes de rapport.",
        "source": "Santé publique L1 — Rapport, p.115.",
        "answer": "Une proportion, un taux, un ratio ou un indice",
        "correct": "Une proportion, un taux, un ratio ou un indice"
      },
      {
        "type": "qcd",
        "text": "Dans un ratio, le numérateur est inclus dans le dénominateur.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Dans un ratio, le numérateur n’est pas inclus dans le dénominateur.",
        "source": "Santé publique L1 — Ratio, p.115.",
        "answer": "Faux",
        "correct": "Faux"
      },
      {
        "type": "qcm",
        "text": "L’indice est particulièrement utilisé lorsque :",
        "options": [
          "Le dénominateur est parfaitement connu",
          "Le dénominateur est difficile à déterminer",
          "Le numérateur est toujours inclus dans le dénominateur",
          "Aucun dénominateur n’est nécessaire"
        ],
        "explanation": "Le cours indique que l’indice est utilisé lorsque le dénominateur n’est pas bien connu ou difficile à déterminer.",
        "source": "Santé publique L1 — Indice, p.116.",
        "answer": "Le dénominateur est difficile à déterminer",
        "correct": "Le dénominateur est difficile à déterminer"
      },
      {
        "type": "qcd",
        "text": "La maîtrise d’une maladie correspond à une réduction durable du nombre de nouveaux cas sans nécessairement éradiquer la maladie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "C’est la définition de la maîtrise d’une maladie donnée par le cours.",
        "source": "Santé publique L1 — Maîtrise d’une maladie, p.116.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Lors de l’élimination d’une maladie :",
        "options": [
          "La maladie et son germe sont nécessairement supprimés",
          "Il n’existe plus de cas, mais l’agent pathogène peut persister dans l’environnement",
          "Le nombre de cas augmente",
          "Aucune mesure n’est nécessaire"
        ],
        "explanation": "Dans l’élimination, la maladie est supprimée mais l’agent pathogène n’est pas entièrement éliminé.",
        "source": "Santé publique L1 — Élimination, p.116.",
        "answer": "Il n’existe plus de cas, mais l’agent pathogène peut persister dans l’environnement",
        "correct": "Il n’existe plus de cas, mais l’agent pathogène peut persister dans l’environnement"
      },
      {
        "type": "qcm",
        "text": "Les indicateurs de santé à tendance positive mesurent principalement :",
        "options": [
          "La maladie",
          "Les décès",
          "La santé",
          "La létalité"
        ],
        "explanation": "Le cours indique qu’ils mesurent la santé.",
        "source": "Santé publique L1 — Groupes d’indicateurs, p.117.",
        "answer": "La santé",
        "correct": "La santé"
      },
      {
        "type": "qcd",
        "text": "Le taux brut de natalité et l’accroissement naturel sont classés parmi les indicateurs à tendance positive.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Ils sont cités parmi les indicateurs de santé à tendance positive.",
        "source": "Santé publique L1 — Indicateurs positifs, p.117.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "La surveillance épidémiologique repose notamment sur :",
        "options": [
          "La collecte systématique et continue des données sanitaires",
          "La collecte occasionnelle uniquement",
          "Le traitement individuel sans collecte",
          "La prescription systématique"
        ],
        "explanation": "Elle comprend la collecte systématique continue, l’analyse et l’interprétation des données sanitaires.",
        "source": "Santé publique L1 — Surveillance épidémiologique, p.117.",
        "answer": "La collecte systématique et continue des données sanitaires",
        "correct": "La collecte systématique et continue des données sanitaires"
      },
      {
        "type": "qcm",
        "text": "Parmi les propositions suivantes, laquelle constitue un but de la surveillance épidémiologique ?",
        "options": [
          "Connaître l’incidence d’une maladie",
          "Supprimer toutes les consultations",
          "Remplacer les programmes de vaccination",
          "Réduire la population observée"
        ],
        "explanation": "La surveillance vise notamment à connaître l’incidence et les caractéristiques d’une maladie.",
        "source": "Santé publique L1 — Buts de la surveillance, pp.117-118.",
        "answer": "Connaître l’incidence d’une maladie",
        "correct": "Connaître l’incidence d’une maladie"
      },
      {
        "type": "qcd",
        "text": "L’évaluation des actions de prévention fait partie des buts de la surveillance épidémiologique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours cite explicitement l’évaluation des actions de prévention.",
        "source": "Santé publique L1 — Buts de la surveillance, p.118.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Quelle est la première étape de la démarche en épidémiologie ?",
        "options": [
          "Recherche de la causalité",
          "Comparaison des données",
          "Collecte des données",
          "Évaluation des actions de santé"
        ],
        "explanation": "La démarche commence par la collecte des données.",
        "source": "Santé publique L1 — Démarche en épidémiologie, p.118.",
        "answer": "Collecte des données",
        "correct": "Collecte des données"
      },
      {
        "type": "qcd",
        "text": "Une définition de cas peut reposer sur des critères cliniques, de laboratoire ou l’association des deux.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "C’est la définition donnée dans le support.",
        "source": "Santé publique L1 — Définition de cas, p.118.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Selon le degré de certitude du diagnostic, les cas sont classés en :",
        "options": [
          "Faibles, moyens et graves",
          "Suspects, probables et confirmés",
          "Aigus, chroniques et guéris",
          "Nouveaux, anciens et récidivants"
        ],
        "explanation": "Le cours distingue les cas suspects, probables et confirmés.",
        "source": "Santé publique L1 — Classification des cas, p.119.",
        "answer": "Suspects, probables et confirmés",
        "correct": "Suspects, probables et confirmés"
      },
      {
        "type": "qcm",
        "text": "Le seuil d’alerte correspond :",
        "options": [
          "Au niveau à partir duquel une menace d’épidémie est notifiée aux autorités sanitaires",
          "Au nombre total de guérisons",
          "À la disparition de la maladie",
          "Au nombre de vaccinations"
        ],
        "explanation": "C’est le niveau à partir duquel la notification d’une menace d’épidémie est faite aux autorités sanitaires.",
        "source": "Santé publique L1 — Seuil d’alerte, p.119.",
        "answer": "Au niveau à partir duquel une menace d’épidémie est notifiée aux autorités sanitaires",
        "correct": "Au niveau à partir duquel une menace d’épidémie est notifiée aux autorités sanitaires"
      },
      {
        "type": "qcd",
        "text": "Pour certaines maladies à potentiel épidémique, un seul cas peut constituer une flambée suspecte.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours le précise pour les maladies à potentiel épidémique et celles visées pour l’élimination ou l’éradication.",
        "source": "Santé publique L1 — Seuil d’alerte, p.119.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Le seuil d’action est :",
        "options": [
          "Le niveau à partir duquel la riposte doit être déclenchée",
          "Le niveau auquel la maladie disparaît naturellement",
          "Le nombre annuel de naissances",
          "Le nombre de cas guéris"
        ],
        "explanation": "Le seuil d’action déclenche la riposte face à une menace d’épidémie.",
        "source": "Santé publique L1 — Seuil d’action, p.119.",
        "answer": "Le niveau à partir duquel la riposte doit être déclenchée",
        "correct": "Le niveau à partir duquel la riposte doit être déclenchée"
      },
      {
        "type": "qcd",
        "text": "La notification de cas est une communication obligatoire à l’autorité sanitaire des cas et décès dus aux maladies transmissibles ou autres affections importantes en santé publique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "C’est la définition de la notification de cas donnée dans le cours.",
        "source": "Santé publique L1 — Notification de cas, p.120.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Les naissances attendues représentent quelle proportion de la population totale ?",
        "options": [
          "3,5 %",
          "4 %",
          "5 %",
          "20 %"
        ],
        "explanation": "Le tableau des cibles fixe les naissances attendues à 3,5 % de la population totale.",
        "source": "Santé publique L2 — Proportions des cibles, p.37.",
        "answer": "3,5 %",
        "correct": "3,5 %"
      },
      {
        "type": "qcm",
        "text": "Les enfants de 0 à 5 ans représentent :",
        "options": [
          "4 %",
          "5 %",
          "17,32 %",
          "20 %"
        ],
        "explanation": "Le cours retient 20 % de la population totale pour les enfants de 0 à 5 ans.",
        "source": "Santé publique L2 — Proportions des cibles, p.37.",
        "answer": "20 %",
        "correct": "20 %"
      },
      {
        "type": "qcd",
        "text": "Le taux brut de natalité rapporte les naissances vivantes d’une année à la population totale de la même année.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "C’est la définition du taux brut de natalité donnée dans le cours.",
        "source": "Santé publique L2 — Taux brut de natalité, p.38.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Le taux général de fécondité rapporte les naissances vivantes de l’année :",
        "options": [
          "Aux femmes en âge de reproduction",
          "Aux enfants de moins de 5 ans",
          "Aux grossesses attendues",
          "Aux décès de l’année"
        ],
        "explanation": "Le TGF rapporte les naissances vivantes au nombre de femmes en âge de reproduction.",
        "source": "Santé publique L2 — Taux général de fécondité, p.38.",
        "answer": "Aux femmes en âge de reproduction",
        "correct": "Aux femmes en âge de reproduction"
      },
      {
        "type": "qcd",
        "text": "L’accroissement annuel prend en compte les phénomènes migratoires.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours précise que l’accroissement annuel prend en compte les phénomènes migratoires.",
        "source": "Santé publique L2 — Accroissement annuel, p.39.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "Le taux brut de morbidité mesure :",
        "options": [
          "Les personnes tombées malades par rapport à la population totale",
          "Les décès maternels uniquement",
          "Les naissances vivantes",
          "Les nouveaux cas uniquement"
        ],
        "explanation": "Il rapporte l’effectif des personnes tombées malades à la population totale.",
        "source": "Santé publique L2 — Taux brut de morbidité, p.40.",
        "answer": "Les personnes tombées malades par rapport à la population totale",
        "correct": "Les personnes tombées malades par rapport à la population totale"
      },
      {
        "type": "qcm",
        "text": "Le taux de mortalité spécifique rapporte :",
        "options": [
          "Tous les décès aux naissances",
          "Les décès causés par une maladie donnée à la population totale",
          "Les nouveaux cas à la population totale",
          "Les décès maternels aux grossesses attendues"
        ],
        "explanation": "Le TMS rapporte les décès dus à une maladie donnée en un an à la population totale de la même année.",
        "source": "Santé publique L2 — Taux de mortalité spécifique, p.42.",
        "answer": "Les décès causés par une maladie donnée à la population totale",
        "correct": "Les décès causés par une maladie donnée à la population totale"
      },
      {
        "type": "qcd",
        "text": "Le taux de mortalité infantile concerne les décès d’enfants âgés de moins de 365 jours.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le TMI rapporte les décès des nourrissons de moins de 365 jours aux naissances vivantes.",
        "source": "Santé publique L2 — Taux de mortalité infantile, p.42.",
        "answer": "Vrai",
        "correct": "Vrai"
      },
      {
        "type": "qcm",
        "text": "La mortalité maternelle concerne notamment le décès d’une femme survenu jusqu’à :",
        "options": [
          "7 jours après l’accouchement",
          "14 jours",
          "28 jours",
          "42 jours"
        ],
        "explanation": "Le cours retient la grossesse, l’accouchement et un délai de 42 jours après l’accouchement, hors causes accidentelles ou fortuites.",
        "source": "Santé publique L2 — Mortalité maternelle, p.43.",
        "answer": "42 jours",
        "correct": "42 jours"
      },
      {
        "type": "qcm",
        "text": "Le taux de mortalité néonatale concerne les décès d’enfants :",
        "options": [
          "De 0 à moins de 28 jours",
          "De 28 jours à moins d’un an",
          "De 1 à 4 ans",
          "De 0 à 5 ans"
        ],
        "explanation": "Le TMNN concerne les décès d’enfants de 0 à moins de 28 jours.",
        "source": "Santé publique L2 — Mortalité néonatale, p.43.",
        "answer": "De 0 à moins de 28 jours",
        "correct": "De 0 à moins de 28 jours"
      },
      {
        "type": "qcd",
        "text": "Le taux de mortalité infantile peut être obtenu par TMNN + TMPNN.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "explanation": "Le cours donne : TMI = TMNNP + TMNNT + TMPNN, ou TMNN + TMPNN.",
        "source": "Santé publique L2 — Mortalité néonatale et post-néonatale, p.44.",
        "answer": "Vrai",
        "correct": "Vrai"
      }
    ]
  }
];
    CONFIG.subjects = EPIDEMIOLOGIE_SUBJECTS;

    const STORAGE_SUBJECTS = "NEUROCHIRURGIE_L3_subjects_v1";
    const STORAGE_RESULTS = "NEUROCHIRURGIE_L3_results_v1";
    const STORAGE_ATTEMPTS = "NEUROCHIRURGIE_L3_attempts_v1";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUIZ_DURATION_SECONDS = 60 * 60;
    const QUIZ_SETTINGS_KEY = "APPRENTISSAGE_EVALUATION_quiz_settings_v2";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 0,
      displayMode: "all",
      questionType: "both",
      cameraEnabled: false,
      antiCheatEnabled: true
    };
    let quizSettings = loadQuizSettings();

    // Chaque évaluation démarre avec toutes les questions par défaut.
    // La banque complète reste disponible et l’ordre est renouvelé à chaque tentative.

    function shuffleQuestions(items) {
      const shuffled = items.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function getExpectedAnswers(question) {
      if (Array.isArray(question.answers)) return question.answers;
      if (Array.isArray(question.correct)) return question.correct;
      return [question.answer || question.correct].filter(Boolean);
    }

    function getQuestionCategory(question) {
      const options = Array.isArray(question.options) ? question.options : [];
      const isTrueFalse = options.length === 2 && options.includes("Vrai") && options.includes("Faux");
      if (isTrueFalse) return "trueFalse";
      return getExpectedAnswers(question).length > 1 ? "multipleAnswers" : "singleAnswer";
    }

    function getQuizQuestionCount() {
      return subjects[0]?.questions?.length || 0;
    }

    function loadQuizSettings() {
      try {
        const saved = { ...DEFAULT_QUIZ_SETTINGS, ...JSON.parse(localStorage.getItem(QUIZ_SETTINGS_KEY) || "{}") };
        saved.cameraEnabled = false;
        saved.displayMode = "all";
        saved.questionType = "both";
        saved.antiCheatEnabled = true;
        return saved;
      } catch (error) {
        return { ...DEFAULT_QUIZ_SETTINGS, cameraEnabled: false };
      }
    }

    function getQuestionsForSelectedType(questionBank) {
      if (quizSettings.questionType === "qcd") {
        return questionBank.filter(question => getQuestionCategory(question) === "trueFalse");
      }
      if (quizSettings.questionType === "qcm") {
        return questionBank.filter(question => getQuestionCategory(question) !== "trueFalse");
      }
      return questionBank.slice();
    }

    function selectQuizQuestions(questionBank) {
      return shuffleQuestions(questionBank);
    }

    function getQuestionOrderSignature(questions) {
      return questions.map(question => question.text || "").join("||");
    }

    function shuffleForNewLearningSession(subjectId, questions) {
      const storageKey = `FORMATION_EVALUATION_last_question_order_${subjectId}`;
      const previousSignature = localStorage.getItem(storageKey);
      let shuffled = shuffleQuestions(questions);

      // Évite de présenter exactement le même ordre lors de deux sessions
      // consécutives, même si le tirage aléatoire produit par hasard le même résultat.
      if (shuffled.length > 1 && getQuestionOrderSignature(shuffled) === previousSignature) {
        shuffled = [...shuffled.slice(1), shuffled[0]];
      }

      localStorage.setItem(storageKey, getQuestionOrderSignature(shuffled));
      return shuffled;
    }

    function prepareSubjectForQuiz(subject) {
      const selectedQuestions = selectQuizQuestions(subject.questions);
      return {
        ...cloneData(subject),
        questions: shuffleForNewLearningSession(subject.id, selectedQuestions)
      };
    }

    /********************************************************************
     * SUIVI DE SORTIE DE PAGE / ONGLET
     * L'étudiant n'est pas bloqué et ne reçoit pas d'avertissement.
     * Si la page, l'onglet ou la fenêtre est quitté pendant l'évaluation,
     * l'information est enregistrée et apparaît dans le résultat final.
     ********************************************************************/
    const PAGE_EXIT_TRACKING_CONFIG = {
      enabled: true
    };

    function isAntiCheatEnabled() {
      return PAGE_EXIT_TRACKING_CONFIG.enabled;
    }

    let pageExitTrackingActive = false;
    let pageExitCount = 0;
    let pageExitEvents = [];
    let lastPageExitAt = 0;
    let quizWasFullscreen = false;
    let pageExitDetectedDuringQuiz = false;

    /********************************************************************
     * PHOTO OBLIGATOIRE AVANT ACCÈS À L'ÉVALUATION
     ********************************************************************/
    let cameraStream = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours le sujet intégré dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque le nouveau sujet.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true,
        duration: 60
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
    }


    /********************************************************************
     * SÉCURITÉ DE L'ÉVALUATION
     * L'étudiant continue son devoir jusqu'à la fin.
     * Tout incident détecté est enregistré et affichera "Auto envoi"
     * au résultat et dans l'administration.
     ********************************************************************/
    function isQuizVisible() {
      const quizView = document.getElementById("quizView");
      return pageExitTrackingActive && quizView && !quizView.classList.contains("hidden");
    }

    function registerPageExitEvent(reason, type = "incident") {
      if (!isAntiCheatEnabled() || !isQuizVisible()) return;

      const now = Date.now();

      // Évite de compter plusieurs fois le même incident en quelques secondes.
      if (now - lastPageExitAt < 1500) return;
      lastPageExitAt = now;

      pageExitDetectedDuringQuiz = true;
      pageExitCount++;
      pageExitEvents.push({
        type,
        reason,
        time: new Date().toLocaleString("fr-FR")
      });
    }

    function startPageExitTracking() {
      if (!isAntiCheatEnabled()) {
        stopPageExitTracking();
        pageExitDetectedDuringQuiz = false;
        pageExitCount = 0;
        pageExitEvents = [];
        return;
      }
      pageExitTrackingActive = true;
      pageExitDetectedDuringQuiz = false;
      pageExitCount = 0;
      pageExitEvents = [];
      lastPageExitAt = 0;
      quizWasFullscreen = Boolean(document.fullscreenElement);
    }

    function stopPageExitTracking() {
      pageExitTrackingActive = false;
    }

    function hasRealPageExitDuringQuiz() {
      return pageExitDetectedDuringQuiz === true && Number(pageExitCount || 0) > 0;
    }

    // Sortie réelle d'onglet, de page ou bascule vers une autre application.
    // On n'utilise plus window.blur, car sur téléphone il peut se déclencher
    // pendant des actions normales et mettait le résultat à zéro à tort.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        registerPageExitEvent("L'étudiant a quitté l'onglet, la page ou l'application", "sortie_page");
      }
    });

    // Appel, notification, volet système ou changement temporaire d'application.
    // Sur téléphone, un appel ou une notification peut déclencher blur / visibilitychange.
    window.addEventListener("blur", () => {
      registerPageExitEvent("Appel, notification ou perte de focus détecté", "appel_notification");
    });

    // Tentative de capture d'écran ou d'action système détectable au clavier.
    // Important : les navigateurs ne permettent pas de détecter toutes les captures,
    // surtout sur téléphone. Les touches détectables sont enregistrées.
    document.addEventListener("keydown", (event) => {
      if (!isQuizVisible()) return;
      const key = String(event.key || "").toLowerCase();
      const code = String(event.code || "").toLowerCase();
      const isPrintScreen = key === "printscreen" || code === "printscreen";
      const isScreenShortcut =
        isPrintScreen ||
        (event.ctrlKey && key === "p") ||
        (event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (isScreenShortcut) {
        registerPageExitEvent("Tentative de capture d'écran ou raccourci système détecté", "capture_ecran");
      }
    });

    ["copy", "cut", "paste"].forEach(action => {
      document.addEventListener(action, event => {
        if (!isQuizVisible()) return;
        registerPageExitEvent(`Action ${action} détectée pendant la composition`, action);
        event.preventDefault();
      });
    });

    document.addEventListener("contextmenu", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("Clic droit ou menu contextuel détecté", "menu_contextuel");
      event.preventDefault();
    });

    // Fermeture, actualisation ou navigation hors de la page.
    window.addEventListener("pagehide", () => {
      registerPageExitEvent("L'étudiant a quitté ou actualisé la page", "fermeture_actualisation");
    });

    // Sortie du mode plein écran, si l'évaluation était en plein écran.
    document.addEventListener("fullscreenchange", () => {
      if (!isQuizVisible()) return;

      if (document.fullscreenElement) {
        quizWasFullscreen = true;
        return;
      }

      if (quizWasFullscreen) {
        registerPageExitEvent("L'étudiant est sorti du mode plein écran", "plein_ecran");
      }
    });

    window.addEventListener("beforeunload", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("L'étudiant a tenté de fermer ou actualiser la page", "fermeture_actualisation");
      event.preventDefault();
      event.returnValue = "Une évaluation est en cours. Quitter la page peut interrompre votre composition.";
      return event.returnValue;
    });


    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      clearInterval(timerInterval);
      stopPageExitTracking();
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function getActiveMatricule() {
      return (window.activeStudentFullName || localStorage.getItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME") || "").trim();
    }

    function getStudentProfile() {
      const matricule = getActiveMatricule();
      const record = window.CODES_ACCES?.[matricule];
      const nomComplet = record?.nom || "APPRENANT";
      return {
        nom: nomComplet,
        prenom: "",
        nomComplet,
        matricule,
        filiere: record?.filiere || "",
        telephone: record?.numero || "",
        antenne: record?.antenne || ""
      };
    }

    function updateStudentHeader() {
      const node = document.getElementById("studentHeaderName");
      if (!node) return;
      node.textContent = `${getStudentProfile().nomComplet} |`;
    }

    function getStudentResultsForDashboard() {
      const profile = getStudentProfile();
      return getResults().filter(item => {
        const matricule = String(item?.student?.matricule || "").trim();
        return matricule === profile.matricule;
      });
    }

    function renderStudentResultsTable() {
      const results = getStudentResultsForDashboard();
      if (results.length === 0) {
        return '<p class="student-empty-state">Aucune évaluation effectuée pour le moment.</p>';
      }

      const rows = results.slice().reverse().map(result => `
        <tr>
          <td>
            <strong>${escapeHTML(result.subjectTitle || "ÉVALUATION")}</strong>
            <div class="student-table-date">Terminée : ${escapeHTML(result.date || "")}</div>
          </td>
          <td><strong>${escapeHTML(result.note20 || "0.00")}</strong></td>
          <td>${Number(result.good || 0)}</td>
          <td>${Number(result.bad || 0)}</td>
        </tr>
      `).join("");

      return `
        <div class="student-table-wrap">
          <table class="student-results-table">
            <thead>
              <tr>
                <th>Évaluation</th>
                <th>Score</th>
                <th>Bonnes</th>
                <th>Mauvaises</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    function renderSubjects() {
      const homeView = document.getElementById("homeView");
      if (!homeView) return;

      updateStudentHeader();

      const profile = getStudentProfile();
      const programmedSubjects = subjects.filter(subject => subject.programmed === true);
      const availableSubjects = programmedSubjects.filter(subject => getSubjectStatus(subject).key === "available");

      const availableHtml = availableSubjects.length ? availableSubjects.map(availableSubject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(availableSubject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Durée :</strong> ${availableSubject.duration} min</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${availableSubject.questions.length} — toutes affichées sur une page</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</div>
      `;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <div class="student-profile-inline">
              <span>Nom et Prénoms : <strong>${escapeHTML(profile.nomComplet)}</strong></span>
              <span>Filière : <strong>${escapeHTML(profile.filiere || "Non renseignée")}</strong></span>
              <span>Numéro : <strong>${escapeHTML(profile.telephone || "Non renseigné")}</strong></span>
              <span>Antenne : <strong>${escapeHTML(profile.antenne || "Non renseignée")}</strong></span>
            </div>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes évaluations</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Sujet disponible</h3>
            <p class="student-section-note">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</p>
            ${availableHtml}
          </section>

          <section class="student-section-card">
            <h3>Évaluations effectuées</h3>
            <p class="student-section-note">Vous pouvez consulter votre note et le résumé de l'évaluation.</p>
            ${renderStudentResultsTable()}
          </section>
        </div>
      `;
    }

    function getQuizTypeLabel() {
      if (quizSettings.questionType === "qcd") return "QCD seulement";
      if (quizSettings.questionType === "qcm") return "QCM seulement";
      return "QCM et QCD";
    }

    function getMaximumQuestionCount(type = quizSettings.questionType) {
      const bank = subjects[0]?.questions || CONFIG.subjects[0]?.questions || [];
      if (type === "qcd") return bank.filter(q => getQuestionCategory(q) === "trueFalse").length;
      if (type === "qcm") return bank.filter(q => getQuestionCategory(q) !== "trueFalse").length;
      return bank.length;
    }

    function openQuizSettings() {
      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `<div class="modal-content settings-modal-content">
        <h2>Paramètres de la composition</h2>
        <p>Toutes les questions du sujet sont affichées sur une page.</p>
        <p>Durée : 60 minutes. Le devoir est envoyé automatiquement à la fin du temps.</p>
        <p>La surveillance des sorties de page et des actions détectables est activée.</p>
        <button class="btn-green" type="button" onclick="closeModal()">Fermer</button>
      </div>`;
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      const matriculeInput = document.getElementById(`matricule-${subjectId}`);
      if (matriculeInput) matriculeInput.value = getActiveMatricule();

      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }


    function stopCameraStream() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    function closeCameraGate() {
      stopCameraStream();
      const modal = document.getElementById("cameraGateModal");
      if (modal) modal.remove();
    }

    function beginEvaluationAfterPhoto(subjectId, student, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        ...student,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer();
      startPageExitTracking();
    }

    async function openCameraGate(subjectId, student) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Votre navigateur ne permet pas l'utilisation de la caméra. Utilisez Chrome, Edge ou Firefox avec un lien HTTPS.");
        return;
      }

      closeCameraGate();

      const modal = document.createElement("div");
      modal.id = "cameraGateModal";
      modal.className = "camera-gate-modal";
      modal.innerHTML = `

</div>
      `;
      document.body.appendChild(modal);

      const video = document.getElementById("cameraGateVideo");
      const takeBtn = document.getElementById("takeCameraPhotoBtn");
      const preview = document.getElementById("cameraGatePreview");
      const canvas = document.getElementById("cameraGateCanvas");

      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        video.srcObject = cameraStream;
      } catch (error) {
        closeCameraGate();
        alert("Caméra non activée. Vous devez autoriser la caméra et prendre une photo avant d'accéder à l'évaluation.");
        return;
      }

      takeBtn.onclick = () => {
        const width = 320;
        const videoWidth = video.videoWidth || 640;
        const videoHeight = video.videoHeight || 480;
        const height = Math.round(width * (videoHeight / videoWidth));

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        const photoData = canvas.toDataURL("image/jpeg", 0.65);

        preview.classList.remove("hidden");
        preview.innerHTML = `
<p>Photo prise avec succès.</p>`;
        takeBtn.textContent = "Accéder à l'évaluation";
        takeBtn.onclick = () => {
          closeCameraGate();
          beginEvaluationAfterPhoto(subjectId, student, photoData);
        };
      };
    }


    function startQuickEvaluation(subjectId) {
      if (quizSettings.cameraEnabled === false) {
        beginQuizAfterCamera(subjectId, "");
        return;
      }
      openCameraBeforeQuiz(subjectId);
    }

    function openCameraBeforeQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content camera-modal-content">
          <h2>Photo obligatoire avant l'évaluation</h2>
          <p class="muted">Autorisez la caméra, puis prenez une photo pour accéder à l'évaluation.</p>

          <div class="camera-box">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <canvas id="cameraCanvas" class="hidden"></canvas>
            <img id="cameraPhotoPreview" class="camera-photo-preview hidden" alt="Photo prise">
            <div id="cameraFallbackBox" class="camera-fallback-box hidden">
              <p><strong>Caméra directe bloquée ou indisponible.</strong></p>
              <p>Utilisez le bouton ci-dessous pour prendre une photo avec votre téléphone ou choisir une photo.</p>
              <label class="camera-file-btn">
                Prendre / choisir une photo
                <input id="cameraFileInput" type="file" accept="image/*" capture="user" onchange="handleStudentPhotoFile('${subjectId}', this)">
              </label>
            </div>
          </div>

          <div class="actions camera-actions">
            <button id="captureCameraBtn" class="btn-green" onclick="captureStudentPhoto('${subjectId}')">Prendre la photo</button>
            <button class="btn-light" onclick="closeCameraModal()">Annuler</button>
          </div>
          <p id="cameraError" class="camera-error hidden"></p>
        </div>
      `;

      startCompatibleCamera(subjectId);
    }

    function getCompatibleGetUserMedia() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return constraints => navigator.mediaDevices.getUserMedia(constraints);
      }

      const legacy =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (!legacy) return null;

      return constraints => new Promise((resolve, reject) => {
        legacy.call(navigator, constraints, resolve, reject);
      });
    }

    function startCompatibleCamera(subjectId) {
      const getMedia = getCompatibleGetUserMedia();
      const video = document.getElementById("cameraPreview");
      const captureBtn = document.getElementById("captureCameraBtn");

      if (!getMedia) {
        showCameraFallback(subjectId, "Votre navigateur ne permet pas la caméra directe.");
        return;
      }

      const attempts = [
        { video: { facingMode: "user" }, audio: false },
        { video: true, audio: false }
      ];

      function tryCamera(index) {
        if (index >= attempts.length) {
          showCameraFallback(subjectId, "La caméra directe est bloquée. Utilisez le bouton de photo proposé ci-dessous.");
          return;
        }

        getMedia(attempts[index])
          .then(stream => {
            window.currentCameraStream = stream;
            if (video) {
              video.srcObject = stream;
              video.classList.remove("hidden");
              video.play().catch(() => {});
            }
            if (captureBtn) captureBtn.disabled = false;
            const errorBox = document.getElementById("cameraError");
            if (errorBox) errorBox.classList.add("hidden");
          })
          .catch(() => tryCamera(index + 1));
      }

      if (captureBtn) captureBtn.disabled = false;
      tryCamera(0);
    }

    function showCameraFallback(subjectId, message = "") {
      const video = document.getElementById("cameraPreview");
      const fallback = document.getElementById("cameraFallbackBox");
      const captureBtn = document.getElementById("captureCameraBtn");
      const errorBox = document.getElementById("cameraError");

      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }

      if (video) {
        video.srcObject = null;
        video.classList.add("hidden");
      }
      if (fallback) fallback.classList.remove("hidden");
      if (captureBtn) captureBtn.disabled = true;

      if (message && errorBox) {
        errorBox.textContent = message + " Si possible, ouvrez le site en HTTPS ou en localhost.";
        errorBox.classList.remove("hidden");
      }
    }

    function handleStudentPhotoFile(subjectId, input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type || !file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        const photoData = event.target.result;
        window.currentStudentPhoto = photoData;

        const img = document.getElementById("cameraPhotoPreview");
        if (img) {
          img.src = photoData;
          img.classList.remove("hidden");
        }

        closeCameraModal();
        beginQuizAfterCamera(subjectId, photoData);
      };
      reader.onerror = () => alert("Impossible de lire la photo. Veuillez réessayer.");
      reader.readAsDataURL(file);
    }

    function closeCameraModal() {
      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }
      const modal = document.getElementById("modal");
      if (modal) {
        modal.className = "modal hidden";
        modal.innerHTML = "";
      }
    }

    function captureStudentPhoto(subjectId) {
      const video = document.getElementById("cameraPreview");
      const canvas = document.getElementById("cameraCanvas");
      const img = document.getElementById("cameraPhotoPreview");

      if (!video || !canvas || !video.srcObject) {
        showCameraFallback(subjectId, "Veuillez autoriser la caméra, puis reprendre la photo.");
        return;
      }

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoData = canvas.toDataURL("image/jpeg", 0.85);
      window.currentStudentPhoto = photoData;

      if (img) {
        img.src = photoData;
        img.classList.remove("hidden");
      }

      closeCameraModal();
      beginQuizAfterCamera(subjectId, photoData);
    }

    function beginQuizAfterCamera(subjectId, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const profile = getStudentProfile();
      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        nom: profile.nom,
        prenom: profile.prenom,
        matricule: profile.matricule,
        filiere: profile.filiere,
        antenne: profile.antenne,
        telephone: profile.telephone,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer();
      startPageExitTracking();
    }

    function logoutStudent() {
      clearInterval(timerInterval);
      localStorage.removeItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME");
      window.activeStudentFullName = "";

      const accessPage = document.getElementById("accessPage");
      const siteHeader = document.getElementById("siteHeader");
      const mainContent = document.getElementById("mainContent");
      const input = document.getElementById("accessFullName");

      if (siteHeader) siteHeader.style.display = "none";
      if (mainContent) mainContent.style.display = "none";
      const siteFooter = document.getElementById("siteFooter");
      if (siteFooter) siteFooter.style.display = "none";
      if (accessPage) accessPage.style.display = "flex";
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 50);
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = (document.getElementById(`matricule-${subjectId}`).value || getActiveMatricule()).trim();

      if (!matricule) {
        alert("Veuillez entrer votre nom et vos prénoms sur la première page.");
        location.reload();
        return;
      }
      if (!nom || !prenom) return alert("Veuillez renseigner nom et prénom.");

      // Les étudiants peuvent reprendre le même sujet autant de fois qu’ils le souhaitent.
      if (quizSettings.cameraEnabled === false) {
        beginEvaluationAfterPhoto(subjectId, { nom, prenom, matricule }, "");
        return;
      }
      openCameraGate(subjectId, { nom, prenom, matricule });
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      const quizView = document.getElementById("quizView");
      const totalQuestions = currentSubject.questions.length;
      if (quizSettings.displayMode === "all") {
        quizView.innerHTML = `
          <div class="quiz-layout quiz-layout-single">
            <div class="panel quiz-panel quiz-panel-clean">
              <div class="question-timer-top question-timer-clean">
                <strong id="timer" class="timer question-timer">${"60"}:00</strong>
                <div class="question-progress-wrap"><div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div></div>
              </div>
              <form id="quizForm">
                <p class="muted all-questions-note">${totalQuestions} questions affichées sur cette page.</p>
                ${currentSubject.questions.map((question, index) => `
                  <section class="all-question-block">
                    <div class="all-question-number">Question ${index + 1} / ${totalQuestions}</div>
                    ${renderQuestion(question, index)}
                  </section>`).join("")}
                <div class="question-navigation">
                  <button type="button" class="btn-green" onclick="submitQuiz(false)">Valider ma composition</button>
                </div>
              </form>
            </div>
          </div>`;
        restoreAllQuestionAnswers();
        quizView.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const q = currentSubject.questions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single">
          <div class="panel quiz-panel quiz-panel-clean">
            <div class="question-timer-top question-timer-clean">
              <strong id="timer" class="timer question-timer">00:30</strong>
              <div class="question-progress-wrap" aria-label="Progression du temps restant">
                <div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div>
              </div>
            </div>

            <form id="quizForm">
              ${renderQuestion(q, currentQuestionIndex)}
              <div class="question-navigation">
                <button type="button" class="btn-green" onclick="goToNextQuestion()">
                  ${isLastQuestion ? "Valider ma composition" : "Question suivante"}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
      restoreCurrentQuestionAnswer();
      quizView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const options = Array.isArray(q.options) ? q.options : [];
      const caseContext = q.caseContext ? `<div class="case-context"><div class="case-context-label">Texte de l’étude de cas</div><div class="case-context-text">${escapeHTML(q.caseContext).replace(/\n/g, "<br>")}</div></div>` : "";
      return `
        <div class="question question-clean">
          ${caseContext}
          <p class="question-text-only">${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function saveCurrentQuestionAnswer() {
      const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]:checked`));
      savedQuestionAnswers[currentQuestionIndex] = selectedNodes.map(input => input.value);
    }

    function saveAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${index}"]:checked`));
        savedQuestionAnswers[index] = selectedNodes.map(input => input.value);
      });
    }

    function restoreAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        (savedQuestionAnswers[index] || []).forEach(value => {
          const input = Array.from(document.querySelectorAll(`input[name="q-${index}"]`)).find(node => node.value === value);
          if (input) input.checked = true;
        });
      });
    }

    function restoreCurrentQuestionAnswer() {
      const savedAnswers = savedQuestionAnswers[currentQuestionIndex] || [];
      savedAnswers.forEach(value => {
        const input = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]`))
          .find(node => node.value === value);
        if (input) input.checked = true;
      });
    }

    function goToNextQuestion() {
      saveCurrentQuestionAnswer();
      if (currentQuestionIndex >= currentSubject.questions.length - 1) {
        submitQuiz(false);
        return;
      }
      currentQuestionIndex++;
      renderQuiz();
      startTimer();
    }

    function startTimer() {
      const deadline = quizStartTime.getTime() + QUIZ_DURATION_SECONDS * 1000;
      clearInterval(timerInterval);
      const tick = () => {
        const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        updateTimerDisplay(remaining, QUIZ_DURATION_SECONDS);
        if (remaining <= 0) {
          clearInterval(timerInterval);
          submitQuiz(true);
        }
      };
      tick();
      timerInterval = setInterval(tick, 1000);
    }

    function updateTimerDisplay(seconds, totalSeconds = QUIZ_DURATION_SECONDS) {
      const safeSeconds = Math.max(0, seconds);
      const min = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
      const sec = (safeSeconds % 60).toString().padStart(2, "0");
      const el = document.getElementById("timer");
      if (el) el.textContent = `${min}:${sec}`;

      const progress = document.getElementById("questionProgressBar");
      if (progress) {
        const percent = totalSeconds > 0 ? Math.max(0, Math.min(100, (safeSeconds / totalSeconds) * 100)) : 0;
        progress.style.width = `${percent}%`;
        progress.classList.toggle("warning", percent <= 35 && percent > 15);
        progress.classList.toggle("danger", percent <= 15);
      }
    }


    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function renderSecurityEvents(events) {
      if (!events || !events.length) return "Aucun incident détecté";
      return events.map(item => escapeHTML(`${item.time || ""} - ${item.reason || "Incident de sécurité"}`)).join("<br>");
    }

    function submitQuiz(auto = false) {
      clearInterval(timerInterval);

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      if (quizSettings.displayMode === "all") saveAllQuestionAnswers();
      else saveCurrentQuestionAnswer();

      currentSubject.questions.forEach((q, index) => {
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = savedQuestionAnswers[index] || [];
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = expected.join(" ; ");
        let state = "empty";

        if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          // Barème : -1 uniquement pour une mauvaise réponse en QCD.
          // Une mauvaise réponse en QCM vaut 0 point.
          if (String(q.type || "").toLowerCase() === "qcd") {
            score += Number(marking.wrong);
          }
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: q.correction || q.explanation || "",
          state
        });
      });

      const maxScore = currentSubject.questions.length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      // Si l'étudiant sort de la page, de l'onglet, de l'application ou du plein écran,
      // il continue son devoir jusqu'à la fin. Au résultat, on affiche seulement
      // la mention "Auto envoi" et l'information est enregistrée dans l'administration.
      const pageExitDetected = hasRealPageExitDuringQuiz();
      const autoSend = pageExitDetected === true;

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        studentPhoto: currentStudent.photo || "",
        photoTaken: Boolean(currentStudent.photo),
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        usedTime: formatDuration(usedSeconds),
        pageExitCount,
        pageExitEvents,
        securityEvents: pageExitEvents,
        pageExitDetected,
        autoSend,
        autoSendScoreZero: false
      };

      const results = getResults();
      results.push(result);
      saveResults(results);
      queueCentralResult(result);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function formatScoreForDisplay(value) {
      const numericValue = Number(value || 0);
      if (Number.isInteger(numericValue)) return String(numericValue);
      return numericValue.toFixed(2).replace(/\.00$/, "");
    }

    function renderResult(result) {
      stopPageExitTracking();
      // Afficher "Auto envoi" seulement si une sortie réelle a été détectée
      // pendant l'évaluation. La note calculée est conservée.
      const resultIsAutoSend = (result.autoSend === true || result.pageExitDetected === true);
      const displayedScore = Number(result.score || 0);
      const displayedResult = formatScoreForDisplay(displayedScore);
      const autoSendMessage = resultIsAutoSend ? '<div class="auto-send-message">Auto envoi</div>' : "";
      const mainContent = document.getElementById("mainContent");
      const resultPhoto = result.studentPhoto || result.student?.photo || "";
      const photoHtml = resultPhoto ? `
` : "";
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          ${autoSendMessage}
          <p class="score-big">${displayedResult}</p>
          <div class="grid">
            <div><strong>Statut :</strong> ${resultIsAutoSend ? "Auto envoi" : "Envoi normal"}</div>
            <div><strong>Nom et Prénoms :</strong> ${escapeHTML(result.student.matricule || `${result.student.nom || ""} ${result.student.prenom || ""}`.trim())}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${displayedScore}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>
            <div><strong>Temps utilisé :</strong> ${result.usedTime}</div>
            <div><strong>Incidents sécurité :</strong> ${Number(result.pageExitCount || 0)}</div>
            <div><strong>Détails sécurité :</strong><br>${renderSecurityEvents(result.pageExitEvents || result.securityEvents)}</div>
          </div>
          ${photoHtml}
          <br>
          <div class="actions">
            <button id="correctionToggleButton" type="button" class="btn-green" onclick="toggleCorrection()">Voir la correction</button>
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
          <div id="correctionBox" class="correction-box hidden">
            ${renderCorrection(result)}
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      const button = document.getElementById("correctionToggleButton");
      if (!box) return;
      const willShow = box.classList.contains("hidden");
      box.classList.toggle("hidden");
      if (button) button.textContent = willShow ? "Masquer la correction" : "Voir la correction";
      if (willShow) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        <p class="muted">Comparez vos réponses avec les bonnes réponses et lisez l'explication de chaque question.</p>
        ${result.answers.map((a, index) => {
          const answerState = a.state === "good" ? "Trouvé" : (a.state === "empty" ? "Non répondu" : "Non trouvé");
          return `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p class="answer-status ${a.state}"><strong>${answerState}</strong></p>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Réponse donnée :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Explication :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Explication :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
          </div>
        `}).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${getQuizQuestionCount()} tirées sur ${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Nom et Prénoms</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(r.student?.matricule || `${r.student?.nom || ""} ${r.student?.prenom || ""}`.trim())}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
</td>
                </tr>
              `).join("") || `<tr><td colspan="5">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
          </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    // Le suivi beforeunload est déjà géré plus haut avec le comptage des sorties.

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
