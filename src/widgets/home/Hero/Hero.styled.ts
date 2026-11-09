import styled from "styled-components";

import { Paragraph, Section } from "@/shared/ui";

export const HeroSection = styled(Section)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black.primary};
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url("/images/hero/main-hero-bg.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  overflow: hidden;

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: none;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const HeroTop = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 400px);
  gap: 32px 48px;
  align-items: start;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
    row-gap: 0;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  grid-column: 1;
  grid-row: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    margin-left: -16px;
    margin-right: -16px;
    padding: 64px 16px 40px;
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      url("/images/hero/main-hero-bg-tablet.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.black.primary};
    overflow: hidden;

    > * {
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      url("/images/hero/main-hero-bg-mobile.png");
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const HeroDescription = styled(Paragraph)`
  margin: 0;
  max-width: 520px;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const BottomStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 32px;
  }
`;
