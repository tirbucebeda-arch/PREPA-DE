// Fichier pour stocker les sujets et les questions
const sujets = [
  {
    nom: "Mathématiques",
    questions: [
      {
        question: "Quelle est la racine carrée de 16 ?",
        reponses: ["4", "5", "6"],
        bonneReponse: "4"
      },
      {
        question: "Combien font 2 + 2 ?",
        reponses: ["3", "4", "5"],
        bonneReponse: "4"
      }
    ]
  },
  {
    nom: "Histoire",
    questions: [
      {
        question: "En quelle année a eu lieu la Révolution française ?",
        reponses: ["1789", "1799", "1800"],
        bonneReponse: "1789"
      }
    ]
  },
  {
    nom: "Législation du Travail - Sujet 2",
    questions: [
      {
        question: "Le contrat de travail est un accord entre un employeur et un salarié.",
        reponses: ["Vrai", "Faux"],
        bonneReponse: "Vrai"
      },
      {
        question: "Le salaire peut être payé dans un débit de boisson.",
        reponses: ["Vrai", "Faux"],
        bonneReponse: "Faux"
      },
      {
        question: "Le lien de subordination est un élément constitutif du contrat de travail.",
        reponses: ["Vrai", "Faux"],
        bonneReponse: "Vrai"
      },
      {
        question: "La durée normale du travail dans le secteur non agricole est de :",
        reponses: ["20 heures", "30 heures", "40 heures", "48 heures"],
        bonneReponse: "40 heures"
      },
      {
        question: "Le contrat à durée indéterminée est appelé :",
        reponses: ["CDD", "CDI", "CTP", "CPE"],
        bonneReponse: "CDI"
      },
      {
        question: "Le salarié doit respecter :",
        reponses: [
          "Le règlement intérieur",
          "Les visiteurs uniquement",
          "Les voisins"
        ],
        bonneReponse: "Le règlement intérieur"
      },
      {
        question: "Le repos hebdomadaire obligatoire est en principe accordé le :",
        reponses: ["Mardi", "Jeudi", "Samedi", "Dimanche"],
        bonneReponse: "Dimanche"
      },
      {
        question: "Le salaire minimum interprofessionnel garanti est appelé :",
        reponses: ["CNPS", "SMIG", "CDI", "CDD"],
        bonneReponse: "SMIG"
      }
    ]
  }
];

// Exporter les sujets pour les utiliser dans d'autres fichiers
export default sujets;


// Paramètres globaux du quiz
export const parametresQuiz = {
  tempsParSujet: 30,
  bonneReponse: 1,
  mauvaiseReponseQCD: -1,
  mauvaiseReponseQCM: 0,
  pasDeReponse: 0
};
