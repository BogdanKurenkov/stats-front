import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 40px;
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 820px;
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.orange.primary};
  background-color: ${({ theme }) => theme.colors.orange.muted};
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

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

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
      transform: translateY(-2px);
    }
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

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
    }
  }
`;

export const HighlightTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const HighlightDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
