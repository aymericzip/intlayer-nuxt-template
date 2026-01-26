export const useLazyLocale = () => {
  const { locale, mergeLocaleMessage } = useI18n();

  const loadNamespace = async (namespace) => {
    try {
      // Dynamically import the specific JSON file
      // NOTE: Vite needs the path to be relative to this file or use an alias like ~
      const module = await import(
        `~/locales/${locale.value}/${namespace}.json`
      );

      // Merge it into the active locale
      mergeLocaleMessage(locale.value, module.default);
    } catch (error) {
      console.error(`Failed to load namespace: ${namespace}`, error);
    }
  };

  return { loadNamespace };
};
