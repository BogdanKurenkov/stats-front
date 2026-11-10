import styled from "styled-components";
import { Title, Paragraph as BaseParagraph } from "@/shared";

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 381px;
  background-color: ${({ theme }) => theme.colors.black.primary};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url("/images/hero/about-hero.png");
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.black.primary} 0%,
      rgba(0, 0, 0, 0.85) 30%,
      transparent 60%
    );
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 50%,
      ${({ theme }) => theme.colors.black.primary} 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: center top;

    &::before {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.black.primary} 0%,
        rgba(0, 0, 0, 0.6) 40%,
        transparent 100%
      );
    }
  }
`;

export const ContainerInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 80px 0 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 40px 0;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 24px;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (hover: hover) {
    a:hover {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
  }
`;

export const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-bottom: 12px;
`;

export const HeroTitle = styled(Title)`
  margin: 0 0 16px;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.gray[100]};
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 10%;
    bottom: 10%;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.orange.primary};
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 36px;

    &::before {
      left: -12px;
      width: 3px;
    }
  }
`;

export const HeroDescription = styled(BaseParagraph)`
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[300]};
  max-width: 500px;

  strong {
    color: ${({ theme }) => theme.colors.gray[100]};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.gray[500]};
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`;
