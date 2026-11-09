import Link from "next/link";
import styled from "styled-components";

import { Container } from "@/shared";

export const BookmakersContainer = styled(Container)`
  display: flex;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const BestOddsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 448px;
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

export const BookmakerCards = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

export const BookmakerCard = styled(Link)`
  width: calc(25% - 9px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 36px 20px;
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
    width: calc(50% - 6px);
    padding: 24px 12px;
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
