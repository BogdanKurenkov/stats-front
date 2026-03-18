import { NextPage } from "next";
import { ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: "main" | "auth" | "none";
  layoutProps?: Record<string, any>;
};

export type NextPageWithGetLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
