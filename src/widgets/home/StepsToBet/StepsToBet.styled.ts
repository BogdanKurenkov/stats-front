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

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const StepCard = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 16px;
    padding: 20px;
  }
`;

export const StepNumber = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange.primary} 0%,
    ${({ theme }) => theme.colors.orange.dark} 100%
  );
  border-radius: 12px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StepTitle = styled(Title)`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const StepDescription = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.6;
`;
