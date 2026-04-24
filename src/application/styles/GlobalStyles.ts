import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${
      inter.style.fontFamily
    }, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.black.background}; 
    color: ${({ theme }) => theme.colors.gray[100]}; 
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: clip;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.orange.primary}40;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.orange.primary};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.gray[600]} ${({ theme }) =>
  theme.colors.gray[800]};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
