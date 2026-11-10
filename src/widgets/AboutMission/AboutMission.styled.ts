import styled from "styled-components";
import { Title, Paragraph as BaseParagraph } from "@/shared";

export const MissionWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 24px;
    margin-bottom: 40px;
  }
`;

export const MissionCard = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
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

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => `calc(${theme.breakpoints.md} + 1px)`}) {
    gap: 24px;
    padding-right: 40px;
    border-right: 1px solid ${({ theme }) => theme.colors.orange.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.orange.primary};
    gap: 12px;
  }
`;

export const IconBox = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.tint};
  color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 12px;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    border-radius: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const MissionTitle = styled(Title)`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const TextBox = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0;
  }
`;

export const MissionText = styled(BaseParagraph)`
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[300]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;
