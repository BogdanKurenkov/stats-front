import { HTMLAttributes } from "react";

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleLevel;
  level?: TitleLevel;
  color?: string;
}
