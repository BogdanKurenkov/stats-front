import styled from "styled-components";
import { Button, Paragraph } from "@/shared/ui";
import { Accordion, AccordionItem } from "@/shared/ui";

export const BonusesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BonusCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const BonusContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    padding: 18px;
    gap: 24px;
  }
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black.primary};
  border-radius: 16px;
  padding: 16px;

  img {
    width: 100%;
    height: auto;
    max-height: 80px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100px;
    height: 100px;
    align-self: center;
  }
`;

export const BonusInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BonusTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const BonusHighlight = styled.span`
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const BonusSubtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0;
`;

export const BonusStats = styled.div`
  display: flex;
  gap: 48px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
    justify-content: space-between;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StatValue = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const StatLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-self: center;
  }
`;

export const StyledButton = styled(Button)`
  white-space: nowrap;
  padding: 12px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 10px 24px;
  }
`;

export const StyledAccordion = styled(Accordion)`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
  padding: 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 18px;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const StyledAccordionCOntent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;
