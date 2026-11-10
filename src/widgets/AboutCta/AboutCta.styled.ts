import styled from "styled-components";
import { Title, Paragraph as BaseParagraph } from "@/shared";

export const SectionWrapper = styled.section`
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 24px;
  }
`;

export const CtaCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  background: linear-gradient(
    100deg,
    rgba(25, 25, 24, 0.89),
    rgba(11, 14, 17, 0.96)
  );
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 16px;
  padding: 40px;
  overflow: hidden;
  isolation: isolate;

  /* Декоративная линия на фоне */
  &::before {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 20%;
    width: 600px;
    height: 200px;
    border-top: 1px solid rgba(255, 121, 0, 0.15);
    border-radius: 50%;
    transform: rotate(-5deg);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;

    &::before {
      display: none;
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;
`;

export const Kicker = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const TitleText = styled(Title)`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const Description = styled(BaseParagraph)`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[300]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 10px;
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
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
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
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[500]};
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
