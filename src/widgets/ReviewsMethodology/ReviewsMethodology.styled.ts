import styled from "styled-components";

import { Paragraph } from "@/shared/ui";
import { revealStyles } from "@/shared/lib/styles/reveal";

export const MethodologyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  overflow: clip;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

export const Header = styled.div<{ $visible?: boolean }>`
  ${revealStyles}
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 820px;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StepCard = styled.div<{ $visible?: boolean }>`
  ${revealStyles}
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: opacity 0.7s ease, transform 0.7s ease, border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
      transform: translateY(-2px);
    }
  }
`;

export const StepNumber = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const StepTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const StepDescription = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const NoteReveal = styled.div<{ $visible?: boolean }>`
  ${revealStyles}
`;

export const NoteText = styled(Paragraph)`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[100]};
`;
