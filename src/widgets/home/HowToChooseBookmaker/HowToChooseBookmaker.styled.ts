import styled from "styled-components";
import { Title, Paragraph } from "@/shared/ui";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

export const CriteriaGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
  }
`;

export const CriteriaItem = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 16px;
    flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.orange.primary};

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CriteriaTitle = styled(Title)`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const CriteriaDescription = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.6;
`;
