import styled from "styled-components";
import Image from "next/image";

import { CustomLink } from "@/shared/ui";

export const LogoLink = styled(CustomLink)`
  text-decoration: none;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    outline-offset: 2px;
  }
`;

export const LogoIcon = styled(Image)`
  width: 132px;
  height: 41px;
`;
