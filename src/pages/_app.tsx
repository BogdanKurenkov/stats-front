import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/app/styles/GlobalStyles";

import { theme } from "@/shared/styles/theme";
import { MainLayout } from "@/app/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
