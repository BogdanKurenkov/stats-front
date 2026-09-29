import { css } from "styled-components";

import type { RevealProps } from "@/shared/types/reveal";

const transitions = {
  fadeUp: (visible: boolean) => `translate3d(0, ${visible ? "0" : "24px"}, 0)`,
  fadeDown: (visible: boolean) =>
    `translate3d(0, ${visible ? "0" : "-24px"}, 0)`,
  fadeLeft: (visible: boolean) =>
    `translate3d(${visible ? "0" : "24px"}, 0, 0)`,
  fadeRight: (visible: boolean) =>
    `translate3d(${visible ? "0" : "-24px"}, 0, 0)`,
  fadeIn: () => "translate3d(0, 0, 0)",
  zoomIn: (visible: boolean) => `scale(${visible ? 1 : 0.92})`,
  zoomOut: (visible: boolean) => `scale(${visible ? 1 : 1.08})`,
} as const;

export const revealStyles = css<RevealProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible = false, $animation = "fadeUp" }) =>
    transitions[$animation]($visible)};
  transition: opacity 0.7s ease, transform 0.7s ease;
`;
