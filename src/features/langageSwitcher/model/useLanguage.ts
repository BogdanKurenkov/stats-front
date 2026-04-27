import { useRouter } from "next/router";
import { useCallback } from "react";

import type { Locale } from "./constants";

export const useLanguage = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale = "pt" } = router;

  const switchLanguage = useCallback(
    (newLocale: Locale) => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

      router.push({ pathname, query }, asPath, { locale: newLocale });
    },
    [pathname, query, asPath, router]
  );

  return {
    currentLocale: locale as Locale,
    switchLanguage,
  };
};
