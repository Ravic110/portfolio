export const EDUCATION = [
  {
    anneeDebut:"2023",
    anneeFin:"2025",
    parcours: "Master 2 Informatique appliquée (mention Électronique)",
    etablissement: "École Supérieure Polytechnique d’Antananarivo",
    lieu: "Antananarivo, Madagascar",
  },
  {
    anneeDebut:"2019",
    anneeFin:"2022",
    parcours: "Licence en Électronique",
    etablissement: "École Supérieure Polytechnique d’Antananarivo",
    lieu: "Antananarivo, Madagascar",
  },
  {
    anneeDebut:"2018",
    anneeFin:"2018",
    parcours: "Baccalauréat Série C",
    etablissement: "Institution Sainte Famille Mahamasina",
    lieu: "Antananarivo, Madagascar",
  },
].sort((a, b) => {
  return parseInt(b.anneeDebut) - parseInt(a.anneeDebut);
});
