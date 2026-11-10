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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.button<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.orange.primary : theme.colors.gray[800]};
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: border-color 0.2s ease;
  text-align: left;
  font: inherit;
  color: inherit;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.orange.primary : theme.colors.gray[700]};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.tint};
  color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 10px;
  margin-bottom: 4px;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
  }
`;

export const CardTitle = styled(Title)`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;
`;

export const CardDescription = styled(BaseParagraph)`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[400]};
  flex: 1;
`;

export const MoreLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange.primary};
  transition: opacity 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  @media (hover: hover) {
    ${Card}:hover & {
      opacity: 0.8;
    }
  }
`;

export const DetailsSlot = styled.div`
  margin-top: 16px;
`;

export const DetailsPanel = styled.div<{ $visible?: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: linear-gradient(
    100deg,
    rgba(25, 25, 24, 0.89),
    rgba(11, 14, 17, 0.96)
  );
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 16px;
  padding: 24px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;

    ${({ $visible }) =>
      !$visible &&
      `
      display: none;
    `}
  }
`;

export const DetailIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.tint};
  color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 50%;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
  }
`;

export const DetailContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 40px;
`;

export const DetailTitle = styled(Title)`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const DetailText = styled(BaseParagraph)`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
