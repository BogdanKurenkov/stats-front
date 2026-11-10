import styled from "styled-components";
import { Title, Paragraph as BaseParagraph } from "@/shared";

export const SectionWrapper = styled.section`
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 40px;
  }
`;

export const ProcessCard = styled.div`
  position: relative;
  background: linear-gradient(
    100deg,
    rgba(25, 25, 24, 0.89),
    rgba(11, 14, 17, 0.96)
  );
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 16px;
  padding: 32px 40px;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 20%;
    width: 400px;
    height: 200px;
    border-bottom: 1px solid rgba(255, 121, 0, 0.15);
    border-radius: 50%;
    transform: rotate(-15deg);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px;

    &::before {
      display: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const TitleGroup = styled.div`
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

export const SectionTitle = styled(Title)`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const SectionSubtitle = styled(BaseParagraph)`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  max-width: 300px;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    max-width: 100%;
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  position: relative;
  background-color: transparent;
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.02);
    }
  }

  @media (min-width: ${({ theme }) => `calc(${theme.breakpoints.lg} + 1px)`}) {
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.gray[800]};
    }
  }

  @media (min-width: ${({ theme }) => `calc(${theme.breakpoints.md} + 1px)`}) and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:nth-child(odd) {
      border-right: 1px solid ${({ theme }) => theme.colors.gray[800]};
    }

    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
    }
  }
`;

export const StepHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StepNumber = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const StepArrow = styled.span`
  color: ${({ theme }) => theme.colors.orange.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StepTitle = styled(Title)`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;
`;

export const StepDescription = styled(BaseParagraph)`
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.gray[400]};
  flex: 1;
`;
