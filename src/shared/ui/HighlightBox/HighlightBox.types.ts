import type { ReactNode } from "react";

export interface HighlightBoxProps {
  children: ReactNode;
  variant?: "default" | "compact";
  className?: string;
}

export interface StyledHighlightBoxProps {
  $variant?: "default" | "compact";
  className?: string;
}
