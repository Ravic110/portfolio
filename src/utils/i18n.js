/**
 * Merge the English variant of a data item when lang === "en".
 * Falls back to the French (default) fields if no `en` key exists.
 *
 * @param {object} item - Data item (e.g. an experience entry)
 * @param {string} lang - Current language ("fr" | "en")
 * @returns {object} Localized item
 */
export const localize = (item, lang) =>
  lang === "en" ? { ...item, ...(item.en || {}) } : item;
