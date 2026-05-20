import { SpinnerProps } from "../Spinner/Spinner.types";

export interface GlobalSpinnerProps extends SpinnerProps {
  fullScreen?: boolean;
  overlay?: boolean;
  zIndex?: number;
}

export interface StyledWrapperProps {
  $fullScreen: boolean;
  $overlay: boolean;
  $zIndex: number;
}
