import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/application/styles/GlobalStyles";
import { MainLayout } from "@/application/layouts/MainLayout";
import { AuthLayout } from "@/application/layouts/AuthLayout";
import { AuthProvider } from "@/application/providers";

import { theme } from "@/shared/styles/theme";
import { NextPageWithLayout } from "@/shared/types";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        {getLayout()}
      </AuthProvider>
    </ThemeProvider>
  );
}