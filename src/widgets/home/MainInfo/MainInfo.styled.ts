import styled from "styled-components";
import { Paragraph } from "@/shared/ui";

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HighlightBox = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-left: 4px solid ${({ theme }) => theme.colors.orange.primary};
  padding: 24px;
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const HighlightText = styled(Paragraph)`
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[100]};
`;
