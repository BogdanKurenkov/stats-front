import { NextPage } from "next";
import { ReactNode } from "react";

import common from "../../../public/locales/pt/common.json";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: "main" | "auth" | "none";
  layoutProps?: Record<string, unknown>;
};

export type NextPageWithGetLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type Dictionary = typeof common;
