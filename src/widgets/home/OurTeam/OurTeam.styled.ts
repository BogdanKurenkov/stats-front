import styled from "styled-components";

import { Title as BaseTitle, Paragraph as BaseParagraph } from "@/shared";

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  background-image: url("/images/team/team-main@2x.png");
  background-position: right center;
  background-repeat: no-repeat;

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
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-position: center;

    &::before {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.black.primary} 0%,
        ${({ theme }) => theme.colors.black.primary} 55%,
        transparent 100%
      );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: none;

    &::before {
      display: none;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Description = styled(BaseParagraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 14px;
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
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemTitle = styled(BaseTitle)`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;
`;

export const ItemDescription = styled(BaseParagraph)`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;
`;
