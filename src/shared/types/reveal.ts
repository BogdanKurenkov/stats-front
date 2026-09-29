export type RevealAnimation =
  | "fadeUp"
  | "fadeIn"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "zoomIn"
  | "zoomOut";

export interface RevealProps {
  $visible?: boolean;
  $animation?: RevealAnimation;
}
