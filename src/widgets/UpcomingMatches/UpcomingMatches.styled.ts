import styled from "styled-components";
import Image from "next/image";

export const WidgetContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 20px;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
    gap: 16px;
  }
`;

export const TopFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterPill = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;

  .flag {
    font-size: 16px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.gray[600]};
    }
  }
`;

export const FilterPillActive = styled(FilterPill)`
  background-color: ${({ theme }) => theme.colors.orange.primary};
  border-color: ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.black.background};

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.orange.secondary};
      border-color: ${({ theme }) => theme.colors.orange.secondary};
    }
  }
`;

export const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
    gap: 16px;
  }
`;

export const SideCard = styled(Card)``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

export const CardTitleGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  svg {
    margin-top: 2px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const CardSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 8px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.orange.primary};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &.outline {
    padding: 6px 12px;
    font-size: 12px;
  }

  &.full-width {
    width: 100%;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.orange.tint};
    }
  }
`;

export const DesktopTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 1.5fr 1fr 180px;
  gap: 16px;
  padding: 12px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1.5fr 1fr 180px;
  gap: 16px;
  padding: 16px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const DateCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  white-space: nowrap;

  .date {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  .time {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const MatchCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .dash {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    flex-shrink: 0;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[100]};
    white-space: nowrap;
  }
`;

export const LeagueCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LeagueInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeagueName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const CountryName = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PaginationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const PaginationText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const LeagueList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeagueListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const LeagueItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const LeagueItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MatchesBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 11px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[800]};
`;

export const NoteText = styled.p`
  margin: 0;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 1.4;
  text-align: left;
`;

export const MobileMatchCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 16px;
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};

  .league {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .flag {
    font-size: 14px;
  }
`;

export const MobileTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .vs {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const MobileTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 40%;
  text-align: center;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  span {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.2;
  }
`;

export const MainCard = styled(Card)`
  .mobile-cards {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${DesktopTable} {
      display: none;
    }

    .mobile-cards {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;

export const LogoImage = styled(Image)`
  object-fit: contain;
  flex-shrink: 0;
`;

export const FlagImage = styled(Image)`
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
`;

export const LeagueFlagImage = styled(Image)`
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
`;

export const BroadcastBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
