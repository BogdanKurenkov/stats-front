import { ReactNode, HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: "section" | "div" | "article" | "header" | "footer";
  pt?: boolean;
  pb?: boolean;
}
