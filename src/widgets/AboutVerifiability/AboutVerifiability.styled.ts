import styled from "styled-components";
import { Title, Paragraph as BaseParagraph } from "@/shared";

export const SectionWrapper = styled.section`
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 40px;
  }
`;

export const VerifiabilityCard = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background: linear-gradient(
    100deg,
    rgba(25, 25, 24, 0.89),
    rgba(11, 14, 17, 0.96)
  );
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 16px;
  padding: 32px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 24px;
  }
`;

export const IconBox = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.tint};
  color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 12px;

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 44px;
    height: 44px;
    border-radius: 10px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Description = styled(BaseParagraph)`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[300]};
  max-width: 750px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 13px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[500]};
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 14px 20px;
  }
`;
