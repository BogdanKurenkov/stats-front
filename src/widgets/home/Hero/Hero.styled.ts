import styled from "styled-components";

import { Paragraph, Section } from "@/shared/ui";

export const HeroSection = styled(Section)`
  position: relative;
  background-image: url("/images/hero/main-hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.black.primary};
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
    background-position: 70% center;
  }
`;

export const HeroTop = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 400px);
  gap: 48px;
  align-items: start;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

export const FeaturesRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
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

export const MatchCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: rgba(20, 20, 20, 0.72);
  backdrop-filter: blur(14px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.orange.tintStrong};
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.orange.tint},
    0 20px 60px -20px ${({ theme }) => theme.colors.orange.glow};
`;

export const MatchCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const MatchCardLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};

  svg {
    flex-shrink: 0;
    filter: drop-shadow(0 0 6px ${({ theme }) => theme.colors.orange.glow});
  }
`;

export const MatchCardMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: right;
`;

export const TeamsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const Team = styled.div<{ $align: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => ($align === "left" ? "flex-start" : "flex-end")};
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const TeamLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const Versus = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
`;

export const PredictionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PredictionLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PredictionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PredictionText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Odds = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.orange.tintStrong};
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.orange.secondary};
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.orange.glow};
`;

export const PredictionNote = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const MatchCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
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
    grid-template-columns: 1fr;
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
`;

export const BottomStatLabel = styled.span`
  font-size: 13px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
