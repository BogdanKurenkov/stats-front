import styled from "styled-components";
import { Title, Paragraph as BaseParagraph } from "@/shared";

export const SectionWrapper = styled.section`
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 40px;
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
    gap: 16px;
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

export const PrinciplesCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background: linear-gradient(
    100deg,
    rgba(25, 25, 24, 0.89),
    rgba(11, 14, 17, 0.96)
  );
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const PrincipleItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 28px 24px;
  position: relative;

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

    padding: 20px;
  }
`;

export const IconBox = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.orange.primary};

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemTitle = styled(Title)`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;
`;

export const ItemDescription = styled(BaseParagraph)`
  margin: 0;
  font-size: 12px;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
