import { localize } from "./i18n";

const item = {
  poste: "Formateur",
  debut: "Déc 2025",
  etablissement: "ACEP",
  en: {
    poste: "Trainer",
    debut: "Dec 2025",
  },
};

test("localize returns French fields unchanged for lang=fr", () => {
  const result = localize(item, "fr");
  expect(result.poste).toBe("Formateur");
  expect(result.debut).toBe("Déc 2025");
});

test("localize merges English fields for lang=en", () => {
  const result = localize(item, "en");
  expect(result.poste).toBe("Trainer");
  expect(result.debut).toBe("Dec 2025");
  // Non-translated fields remain
  expect(result.etablissement).toBe("ACEP");
});

test("localize handles item without en key", () => {
  const simpleItem = { poste: "Formateur" };
  const result = localize(simpleItem, "en");
  expect(result.poste).toBe("Formateur");
});
