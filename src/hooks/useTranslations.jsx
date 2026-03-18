import { useLanguage } from "@contexts/LanguageContext";
import { translations } from "@utils/translations";

const useTranslations = () => {
  const { lang } = useLanguage();
  return translations[lang];
};

export default useTranslations;
