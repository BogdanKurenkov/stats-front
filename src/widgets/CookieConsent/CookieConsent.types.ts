export interface CookieConsentProps {
  showConsent: boolean;
  isLoading: boolean;
  hasConsent: boolean;
  acceptCookies: () => void;
  onConsentAccepted?: () => void;
}
