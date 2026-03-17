export type SpinnerType =
  | "spinner"
  | "pulse"
  | "beat"
  | "ring"
  | "scale"
  | "moon";

export interface SpinnerProps {
  size?: number;
  type?: SpinnerType;
  color?: string;
  loading?: boolean;
  className?: string;
}
