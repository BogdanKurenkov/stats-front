import { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactNode } from "react";

import common from "../../../public/locales/pt/common.json";

import { ThemeMode } from "../styles/theme.types";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: "main" | "auth" | "admin" | "none";
  layoutProps?: Record<string, unknown>;
};

export type NextPageWithGetLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  themeMode: ThemeMode;
};

export type Dictionary = typeof common;
