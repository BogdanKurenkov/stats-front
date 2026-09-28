import type { AppContext, AppProps } from "next/app";
import App from 'next/app';
import { parseCookies } from 'nookies';

import GlobalStyle from "@/application/styles/GlobalStyles";
import { MainLayout, AuthLayout, AdminLayout } from "@/application/layouts";
import { AdminProvider, AuthProvider, DictionaryProvider, CustomThemeProvider } from "@/application/providers";
import type { ThemeMode } from "@/application/providers/ThemeProvider/";

import type { NextPageWithLayout } from "@/shared";

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