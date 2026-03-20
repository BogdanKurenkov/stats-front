import styled from "styled-components";
import { Paragraph } from "@/shared/ui";

export const MainInfoWrapper = styled.div`
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

export const HighlightBox = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black.secondary} 0%,
    ${({ theme }) => theme.colors.gray[900]} 100%
  );
  border-left: 4px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 16px;
  padding: 28px 32px;
  margin: 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 24px;
  }
`;

export const HighlightText = styled(Paragraph)`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
    transform: translateY(-2px);
  }
`;

export const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
