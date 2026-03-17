import styled from "styled-components";
import { TitleProps } from "./Title.types";

export const StyledTitle = styled.h1<TitleProps>`
  font-size: ${({ theme, as, level }) => {
    const tag = as || level || "h1";
    return theme.typography.title[tag].fontSize;
  }};
  font-weight: ${({ theme, as, level }) => {
    const tag = as || level || "h1";
    return theme.typography.title[tag].fontWeight;
  }};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] || color : theme.colors.gray[100]};
`;
