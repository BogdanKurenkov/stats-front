import type { AppProps } from "next/app";

import GlobalStyle from "@/application/styles/GlobalStyles";
import { MainLayout } from "@/application/layouts/MainLayout";
import { AuthLayout } from "@/application/layouts/AuthLayout";
import { AuthProvider, DictionaryProvider } from "@/application/providers";
import { CustomThemeProvider } from "@/application/providers/ThemeProvider/ThemeProvider";

import { NextPageWithLayout } from "@/shared/types";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = () => {
    switch (Component.layout) {
      case 'auth':
        return <AuthLayout><Component {...pageProps} /></AuthLayout>;
      case 'none':
        return <Component {...pageProps} />;
      default:
        return <MainLayout><Component {...pageProps} /></MainLayout>;
    }
  };

  return (
    <DictionaryProvider value={pageProps.messages}>
      <CustomThemeProvider>
        <GlobalStyle />
        <AuthProvider>
          {getLayout()}
        </AuthProvider>
      </CustomThemeProvider>
    </DictionaryProvider>
  );
}

export default App;