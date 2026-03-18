import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { NextPageWithLayout } from "@/shared/types";

import GlobalStyle from "@/app/styles/GlobalStyles";
import { theme } from "@/shared/styles/theme";
import { MainLayout } from "@/app/layouts/MainLayout";
import { AuthLayout } from "@/app/layouts/AuthLayout";

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
      {getLayout()}
    </ThemeProvider>
  );
}