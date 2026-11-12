import type { AppContext } from "next/app";
import App from "next/app";
import { parseCookies } from "nookies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "@/application/styles";
import { MainLayout, AuthLayout, AdminLayout } from "@/application/layouts";
import {
  AdminProvider,
  AuthProvider,
  DictionaryProvider,
  CustomThemeProvider,
} from "@/application/providers";

import type { AppPropsWithLayout } from "@/shared/types";
import type { ThemeMode } from "@/shared/styles";

type LayoutProps = {
  Component: AppPropsWithLayout["Component"];
  pageProps: AppPropsWithLayout["pageProps"];
};

function getLayout({ Component, pageProps }: LayoutProps) {
  switch (Component.layout) {
    case "auth":
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      );
    case "admin":
      return (
        <AdminProvider>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </AdminProvider>
      );
    case "none":
      return <Component {...pageProps} />;
    default:
      return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      );
  }
}

function MyApp({ Component, pageProps, themeMode }: AppPropsWithLayout) {
  return (
    <DictionaryProvider value={pageProps.messages}>
      <CustomThemeProvider initialMode={themeMode}>
        <GlobalStyle />
        <AuthProvider>{getLayout({ Component, pageProps })}</AuthProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          theme={themeMode}
        />
      </CustomThemeProvider>
    </DictionaryProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  let themeMode: ThemeMode = "dark";

  try {
    const cookies = parseCookies(appContext.ctx);
    const savedTheme = cookies["theme-mode"] as ThemeMode;
    if (savedTheme === "light" || savedTheme === "dark") {
      themeMode = savedTheme;
    }
  } catch {}

  return { ...appProps, themeMode };
};

export default MyApp;
