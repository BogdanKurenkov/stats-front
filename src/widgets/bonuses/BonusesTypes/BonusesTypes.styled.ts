import styled from "styled-components";
import { Title, Paragraph } from "@/shared/ui";

export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 40px;
  }
`;

export const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const TypeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  padding: 24px;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
    transform: translateY(-2px);
  }
`;

export const TypeName = styled(Title)`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const TypeDescription = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.6;
`;

export const LoyaltyCard = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black.secondary} 0%,
    ${({ theme }) => theme.colors.gray[900]} 100%
  );
  border-radius: 16px;
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.orange.primary}40;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const LoyaltyTitle = styled(Title)`
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const LoyaltyText = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.6;
`;
