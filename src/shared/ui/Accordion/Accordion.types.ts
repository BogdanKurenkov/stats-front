import { ReactNode } from "react";

interface AccordionSingleProps {
  type: "single";
  defaultValue?: string;
  collapsible?: boolean;
  children: ReactNode;
  className?: string;
}

interface AccordionMultipleProps {
  type: "multiple";
  defaultValue?: string[];
  children: ReactNode;
  className?: string;
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;
