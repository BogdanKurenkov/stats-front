import type { ReactNode } from "react";

export interface AccordionItemProps {
  value: string;
  trigger: ReactNode;
  children: ReactNode;
}
