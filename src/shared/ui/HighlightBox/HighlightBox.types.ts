import { ReactNode } from "react";

export interface HighlightBoxProps {
  children: ReactNode;
  variant?: "default" | "compact";
  className?: string;
}
