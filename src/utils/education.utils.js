export const EDUCATION = [
  {
    anneeDebut:"2019",
    anneeFin:"2022",
    parcours: "Licence en Développement Web et Design",
    etablissement: "IT University",
    lieu: "Antananarivo, Madagascar",
  },
  {
    anneeDebut:"2018",
    anneeFin:"2019",
    parcours: "Baccalauréat Série S",
    etablissement: "Alliance Française Antsahabe",
    lieu: "Antananarivo, Madagascar",
  },
  {
    anneeDebut:"2023",
    anneeFin:"présent",
    parcours: "Master en Développement Web et Design",
    etablissement: "IT University",
    lieu: "Antananarivo, Madagascar",
  },
].sort((a, b) => {
  return parseInt(b.anneeDebut) - parseInt(a.anneeDebut);
});