import { useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";

import { COOKIE_EXPIRY_DAYS, COOKIE_NAME } from "./CookieConsent.constants";

interface CookieConsentReturn {
  showConsent: boolean;
  isLoading: boolean;
  hasConsent: boolean;
  acceptCookies: () => void;
  onConsentAccepted?: () => void;
}

export const useCookieConsent = (
  onConsentAccepted?: () => void,
): CookieConsentReturn => {
  const [showConsent, setShowConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const consent = cookies[COOKIE_NAME];

    if (consent === "accepted") {
      setHasConsent(true);
      setShowConsent(false);
    } else {
      setHasConsent(false);
      setShowConsent(true);
    }

    setIsLoading(false);
  }, []);

  const acceptCookies = () => {
    setCookie(null, COOKIE_NAME, "accepted", {
      maxAge: COOKIE_EXPIRY_DAYS * 24 * 60 * 60,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    setHasConsent(true);
    setShowConsent(false);

    if (onConsentAccepted) {
      onConsentAccepted();
    }
  };

  return {
    showConsent,
    isLoading,
    hasConsent,
    acceptCookies,
  };
};
