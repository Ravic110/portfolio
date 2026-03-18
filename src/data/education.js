export const EDUCATION = [
  {
    anneeDebut: "2023",
    anneeFin: "2025",
    parcours: "Master 2 Informatique appliquée (mention Électronique)",
    parcours_en: "Master's in Applied Computer Science (Electronics)",
    etablissement: "École Supérieure Polytechnique d'Antananarivo",
    lieu: "Antananarivo, Madagascar",
  },
  {
    anneeDebut: "2019",
    anneeFin: "2022",
    parcours: "Licence en Électronique",
    parcours_en: "Bachelor's in Electronics",
    etablissement: "École Supérieure Polytechnique d'Antananarivo",
    lieu: "Antananarivo, Madagascar",
  },
  {
    anneeDebut: "2018",
    anneeFin: "2018",
    parcours: "Baccalauréat Série C",
    parcours_en: "High School Diploma (Science)",
    etablissement: "Institution Sainte Famille Mahamasina",
    lieu: "Antananarivo, Madagascar",
  },
].sort((a, b) => parseInt(b.anneeDebut) - parseInt(a.anneeDebut));
