import styled from "styled-components";

import { Title, Paragraph } from "@/shared";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

export const Description = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StepCard = styled.div`
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

export const StepIconWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange.primary} 0%,
    ${({ theme }) => theme.colors.orange.dark} 100%
  );
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black.primary};

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2.5;
  }
`;

export const StepBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 9px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  line-height: 1;
`;

export const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StepTitle = styled(Title)`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 15px;
  }
`;

export const StepDescription = styled(Paragraph)`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
  }
`;
