import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useCookieConsent } from "@/widgets/CookieConsent";

const YM_COUNTER_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);

declare global {
  interface Window {
    ym: (counterId: number, action: string, ...args: unknown[]) => void;
  }
}

export const YandexMetrika = () => {
  const router = useRouter();
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined" && window.ym && hasConsent) {
        window.ym(YM_COUNTER_ID, "hit", url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, hasConsent]);

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}', 'ym');

            ym(${YM_COUNTER_ID}, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
