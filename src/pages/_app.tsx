import type { AppContext, AppProps } from "next/app";
import App from 'next/app';
import { parseCookies } from 'nookies';

import GlobalStyle from "@/application/styles/GlobalStyles";
import { MainLayout } from "@/application/layouts/MainLayout";
import { AuthLayout } from "@/application/layouts/AuthLayout";
import { AdminProvider, AuthProvider, DictionaryProvider } from "@/application/providers";
import { CustomThemeProvider } from "@/application/providers/ThemeProvider/ThemeProvider";
import { AdminLayout } from "@/application/layouts";
import { ThemeMode } from "@/application/providers/ThemeProvider/ThemeProvider.types";

import { NextPageWithLayout } from "@/shared";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  themeMode: ThemeMode;
};

function MyApp({ Component, pageProps, themeMode }: AppPropsWithLayout) {
  const getLayout = () => {
    switch (Component.layout) {
      case 'auth':
        return (
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        )
      case 'admin':
        return (
          <AdminProvider>
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </AdminProvider>
        );
      case 'none':
        return <Component {...pageProps} />;
      default:
        return (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )
    }
  };

  return (
    <DictionaryProvider value={pageProps.messages}>
      <CustomThemeProvider initialMode={themeMode}>
        <GlobalStyle />
        <AuthProvider>
          {getLayout()}
        </AuthProvider>
      </CustomThemeProvider>
    </DictionaryProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  let themeMode: ThemeMode = 'dark';

  try {
    const cookies = parseCookies(appContext.ctx);
    const savedTheme = cookies['theme-mode'] as ThemeMode;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      themeMode = savedTheme;
    }
  } catch (error) {

  }

  return { ...appProps, themeMode };
};

export default MyApp;