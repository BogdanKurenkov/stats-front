import styled from "styled-components";
import { Paragraph } from "@/shared/ui";

export const RulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 40px;
  }
`;

export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  padding: 24px;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const CardNumber = styled.div`
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
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black.primary};
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardText = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.5;
`;

export const Note = styled(Paragraph)`
  margin-top: 8px;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-left: 4px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-style: italic;
`;
