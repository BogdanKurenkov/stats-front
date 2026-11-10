import styled from "styled-components";
import Link from "next/link";

import { Title, Paragraph as BaseParagraph, Container } from "@/shared";

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.primary};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-color: ${({ theme }) => theme.colors.black.primary};
  }
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 520px;
  background-image: url("/images/team/team-main.jpg");
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.black.primary} 0%,
      rgba(0, 0, 0, 0.85) 25%,
      transparent 55%
    );
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 55%,
      ${({ theme }) => theme.colors.black.primary} 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 480px;
    background-position: center top;

    &::before {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.black.primary} 0%,
        rgba(0, 0, 0, 0.65) 35%,
        transparent 100%
      );
    }

    &::after {
      background: linear-gradient(
        180deg,
        transparent 60%,
        ${({ theme }) => theme.colors.black.primary} 100%
      );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 380px;
    background-position: center top;

    &::before {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.black.primary} 0%,
        rgba(0, 0, 0, 0.55) 30%,
        transparent 100%
      );
    }

    &::after {
      background: linear-gradient(
        180deg,
        transparent 45%,
        ${({ theme }) => theme.colors.black.primary} 100%
      );
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1000px;
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0;
  }
`;

export const SectionHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 12px;
    align-items: center;
    margin-bottom: 155px;
  }
`;

export const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2px;
    flex: 1;

    h2 {
      font-size: 21px;
      line-height: 1.15;
    }
  }
`;
export const Description = styled(BaseParagraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[300]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 10px;
    line-height: 1.3;
  }
`;

export const AboutLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding-top: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
  position: absolute;
  right: 24px;

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 0;
    font-size: 11px;
    top: 10px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
`;

export const Item = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  padding: 14px;
  min-width: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.orange.primary : theme.colors.gray[800]};
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.orange.primary : theme.colors.gray[700]};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 10px;
    gap: 8px;
    border-radius: 9px;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 8px;
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.orange.primary};

  svg {
    width: 22px;
    height: 22px;
    stroke-width: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 22px;
    height: 22px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
  width: 100%;
`;

export const ItemTitle = styled(Title)`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;
  min-width: 0;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
    line-height: 1.25;
  }
`;

export const ItemDescription = styled(BaseParagraph)`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 11px;
    line-height: 1.35;
  }
`;

export const ItemMoreLink = styled.span<{ $isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.orange.primary : theme.colors.gray[300]};
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease;

  svg {
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange.primary};

      svg {
        transform: translateX(2px);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 11px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const DetailsSlot = styled.div`
  min-height: 120px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 0;
    margin-top: 20px;
  }
`;

export const DetailsPanel = styled.div<{ $visible?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  padding: 20px 24px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;

    ${({ $visible }) =>
      !$visible &&
      `
      display: none;
    `}
  }
`;

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

export const DetailsTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailsLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const DetailsTitle = styled(Title)`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[600]};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const DetailsText = styled(BaseParagraph)`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;

export const OurTeamContainer = styled(Container)`
  position: relative;
`;
