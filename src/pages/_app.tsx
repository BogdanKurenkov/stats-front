import type { AppProps } from "next/app";

import "@/app/styles/globals.css";
import { theme } from "@/app/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/app/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
