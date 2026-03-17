import { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

export type LinkVariant = "default" | "primary" | "secondary" | "underline";
export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export interface CustomLinkProps
  extends Omit<NextLinkProps, "as" | "passHref" | "children"> {
  children: ReactNode;
  variant?: LinkVariant;
  target?: LinkTarget;
  className?: string;
  rel?: string;
}
