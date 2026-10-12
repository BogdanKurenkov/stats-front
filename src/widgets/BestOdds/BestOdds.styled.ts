import styled from "styled-components";
import { Trophy } from "lucide-react";

import { Section } from "@/shared/ui";

export const BestOddsSection = styled(Section)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const BestOddsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 24px;
  }
`;

export const BestOddsTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const BestOddsSubtitle = styled.p`
  margin: 0;
  max-width: 640px;
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const BestOddsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const BookmakerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
      box-shadow: 0 0 20px ${({ theme }) => theme.colors.orange.glow};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 12px;
    padding: 14px 16px;
  }
`;

export const BookmakerLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;
  flex-shrink: 0;

  img {
    height: 100%;
    width: auto;
    display: block;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 22px;
  }
`;

export const BookmakerOddsRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 8px;
  }
`;

export const TrophyIcon = styled(Trophy)`
  color: ${({ theme }) => theme.colors.orange.primary};
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px ${({ theme }) => theme.colors.orange.glow});
`;

export const BookmakerOdds = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;
