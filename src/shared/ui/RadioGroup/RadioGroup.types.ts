import { ReactNode } from "react";

export interface RadioGroupProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  error?: string;
  className?: string;
}
