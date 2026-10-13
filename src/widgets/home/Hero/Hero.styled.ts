import styled from "styled-components";

import { Paragraph, Section } from "@/shared/ui";

export const HeroSection = styled(Section)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black.primary};
  background-image: url("/images/hero/main-hero-bg.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.55) 45%,
      rgba(0, 0, 0, 0.15) 100%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 70% 50%,
      rgba(249, 115, 22, 0.25),
      transparent 60%
    );
    pointer-events: none;
    mix-blend-mode: screen;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: none;
    padding-top: 0;
    padding-bottom: 0;

    &::before,
    &::after {
      display: none;
    }
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
    background-image: url("/images/hero/main-hero-bg-tablet.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.black.primary};
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0.55) 55%,
        rgba(0, 0, 0, 0.95) 100%
      );
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 60% 30%,
        rgba(249, 115, 22, 0.22),
        transparent 55%
      );
      pointer-events: none;
      mix-blend-mode: screen;
    }

    > * {
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url("/images/hero/main-hero-bg-mobile.png");
  }
`;

export const FeaturesRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  grid-column: 1;
  grid-row: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin: 0;
    padding: 24px 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

export const FeatureItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray[200]};

  svg {
    color: ${({ theme }) => theme.colors.orange.primary};
    filter: drop-shadow(0 0 6px ${({ theme }) => theme.colors.orange.glow});
    flex-shrink: 0;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 56px;
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

export const BottomStatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background-color: rgba(20, 20, 20, 0.72);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
      box-shadow: 0 0 24px ${({ theme }) => theme.colors.orange.glow};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8px;
    gap: 8px;
  }
`;

export const BottomStatIcon = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.orange.tint};
  color: ${({ theme }) => theme.colors.orange.secondary};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.orange.tintStrong};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
  }
`;

export const BottomStatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const BottomStatNumber = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const BottomStatLabel = styled.span`
  font-size: 13px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
