import { HTMLAttributes } from "react";

type ParagraphSize = "sm" | "md" | "lg";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: ParagraphSize;
}
