import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";

import type { Locale } from "./constants";

export const useLanguage = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale = "pt" } = router;

  useEffect(() => {
    const cookies = parseCookies();
    const cookieLocale = cookies.NEXT_LOCALE as Locale;

    if (cookieLocale && cookieLocale !== locale) {
      router.replace({ pathname, query }, asPath, { locale: cookieLocale });
    } else if (!cookieLocale && locale) {
      setCookie(null, "NEXT_LOCALE", locale, {
        path: "/",
        maxAge: 365 * 24 * 60 * 60,
      });
    }
  }, []);

  const switchLanguage = useCallback(
    (newLocale: Locale) => {
      setCookie(null, "NEXT_LOCALE", newLocale, {
        path: "/",
        maxAge: 365 * 24 * 60 * 60,
      });
      router.push({ pathname, query }, asPath, { locale: newLocale });
    },
    [pathname, query, asPath, router]
  );

  return {
    currentLocale: locale as Locale,
    switchLanguage,
  };
};
