import styled from "styled-components";
import { Title } from "@/shared/ui";

export const MatchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const MatchesTitle = styled(Title)`
  margin-bottom: 0;
`;

export const SelectWrapper = styled.div`
  min-width: 220px;
`;

export const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const MatchCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  padding: 20px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
    transform: translateY(-2px);
  }
`;

export const MatchTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Team = styled.div`
  flex: 1;
  text-align: center;
`;

export const TeamName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  display: block;
  margin-bottom: 4px;
`;

export const TeamScore = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const Vs = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
  flex-shrink: 0;
`;

export const MatchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const MatchDateTime = styled.div`
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Tournament = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 14px;
`;
