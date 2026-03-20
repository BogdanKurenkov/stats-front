import { ReactNode } from "react";

export interface AccordionItemProps {
  value: string;
  trigger: ReactNode;
  children: ReactNode;
}
