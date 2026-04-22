import { useState, useEffect } from "react";

import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_VALUES,
} from "./CookieConsent.constants";

export const useCookieConsent = (
  onAccept?: () => void,
  onReject?: () => void
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_VALUES.ACCEPTED);
    setIsVisible(false);
    onAccept?.();
  };

  const reject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_VALUES.REJECTED);
    setIsVisible(false);
    onReject?.();
  };

  return { isVisible, accept, reject };
};
