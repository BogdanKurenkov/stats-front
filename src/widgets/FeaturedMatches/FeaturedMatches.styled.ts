import styled from "styled-components";

import { Paragraph } from "@/shared/ui";

import "swiper/css";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  overflow: visible;
  position: relative;
  padding: 4px 0;

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-button-prev svg,
  .swiper-button-next svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.orange.primary};
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 44px;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.black.secondary};
    border: 2px solid ${({ theme }) => theme.colors.gray[700]};
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[800]};

    &::after {
      font-size: 18px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    @media (hover: hover) {
      &:hover:not(.swiper-button-disabled) {
        background-color: ${({ theme }) => theme.colors.orange.primary};
        border-color: ${({ theme }) => theme.colors.orange.primary};

        &::after {
          color: ${({ theme }) => theme.colors.black.primary};
        }

        svg {
          color: white;
        }
      }
    }
  }

  .swiper-button-prev {
    left: -22px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: -12px;
    }
  }

  .swiper-button-next {
    right: -22px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      right: -12px;
    }
  }

  .swiper-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.black.secondary};
        border-color: ${({ theme }) => theme.colors.gray[700]};

        &::after {
          color: ${({ theme }) => theme.colors.gray[400]};
        }
      }
    }
  }
`;

export const MatchCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
      transform: translateY(-2px);
    }
  }
`;

export const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TeamRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const TeamName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const TeamScore = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const VsBadge = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange.primary};
  background-color: ${({ theme }) => theme.colors.black.primary};
  padding: 4px 8px;
  border-radius: 20px;
  align-self: center;
  margin: 4px 0;
`;

export const MatchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export const MatchTime = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const MatchDate = styled(Paragraph)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

export const Tournament = styled(Paragraph)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0;
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;
