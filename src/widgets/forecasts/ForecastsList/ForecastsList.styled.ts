import styled from "styled-components";

import { Paragraph } from "@/shared/ui";

export const ForecastsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ForecastCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  padding: 20px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
  }
`;

export const SportBadge = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.colors.orange.primary}20;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const MatchDateTime = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const MatchTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Team = styled.div`
  flex: 1;
  text-align: center;
`;

export const TeamName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  display: block;
  line-height: 1.3;
`;

export const Vs = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange.primary};
  background-color: ${({ theme }) => theme.colors.black.primary};
  padding: 4px 8px;
  border-radius: 20px;
  flex-shrink: 0;
`;

export const OddsWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const OddItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${({ theme }) => theme.colors.black.primary};
  padding: 6px 12px;
  border-radius: 8px;
`;

export const OddLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const OddValue = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const Preview = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.5;
  font-size: 13px;
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.orange.primary};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
  margin-top: 4px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const AuthorAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange.primary} 0%,
    ${({ theme }) => theme.colors.orange.dark} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black.primary};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const AuthorName = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const AuthorTime = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;
