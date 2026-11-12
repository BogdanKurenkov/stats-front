import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-flow: row wrap;
    align-items: center;
    gap: 12px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 4px;
  }
`;

export const MainTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;

export const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.orange.primary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &::after {
    content: "→";
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;

    &::after {
      font-size: 16px;
    }
  }
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

export const FilterText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 11px;
    line-height: 1.4;
  }
`;

export const FilterButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.orange.primary : theme.colors.gray[800])};
  border-radius: 8px;
  padding: 8px 16px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.gray[100] : theme.colors.gray[300])};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: flex-end;
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.gray[600]};
    }
  }
`;

export const FilterPanel = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterActions = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  & > button {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    border-radius: 6px;
    padding: 0 16px;
    height: 40px;
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    @media (hover: hover) {
      &:hover {
        border-color: ${({ theme }) => theme.colors.gray[500]};
        color: ${({ theme }) => theme.colors.gray[100]};
      }
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: transparent;
    border: none;
    border-radius: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    width: 100%;
  }
`;

export const TableBody = styled.tbody`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const TableRow = styled.tr`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-areas:
      "tournament date"
      "match match"
      "footer footer";
    grid-template-columns: 1fr auto;
    background-color: ${({ theme }) => theme.colors.black.card};
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    border-radius: 12px;
    overflow: hidden;
  }
`;

export const Th = styled.th`
  padding: 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[400]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const ThSortable = styled(Th)<{ $active?: boolean }>`
  cursor: pointer;
  user-select: none;
  color: ${({ theme, $active }) => ($active ? theme.colors.gray[100] : theme.colors.gray[400])};

  svg {
    margin-left: 6px;
    vertical-align: middle;
    color: ${({ theme, $active }) => ($active ? theme.colors.orange.primary : "inherit")};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

export const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[300]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  vertical-align: middle;

  tr:last-child & {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none !important;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .dash {
    color: ${({ theme }) => theme.colors.gray[500]};
    margin: 0 4px;
  }
`;

export const TournamentCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[100]};

  .flag {
    font-size: 18px;
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex !important;
    grid-area: tournament;
    padding: 16px 16px 8px;
    border-bottom: none;
    font-size: 13px;
  }
`;

export const DateCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[400]};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block !important;
    grid-area: date;
    text-align: right;
    padding: 16px 16px 8px 0;
    border-bottom: none;
    font-size: 13px;
  }
`;

export const MatchCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[200]};
  min-width: 250px;

  .mobile-only {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block !important;
    grid-area: match;
    padding: 8px 16px;
    border-bottom: none;
    min-width: auto;

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .team {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 42%;
        font-weight: 500;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray[100]};
      }

      .team.home {
        justify-content: flex-start;
      }

      .team.away {
        justify-content: flex-end;
        text-align: right;
      }
    }
  }
`;

export const TeamLogo = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 24px;
    height: 24px;
  }
`;

export const ScoreCell = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    color: ${({ theme }) => theme.colors.orange.primary};
    font-weight: 700;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    width: 16%;
  }
`;

export const MobileFooterRow = styled.td`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex !important;
    grid-area: footer;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 12px 16px 16px;
    border-bottom: none;

    .result-label {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray[400]};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .details-btn {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.orange.primary};
      font-size: 13px;
      cursor: pointer;
      padding: 0;
      white-space: nowrap;
      flex-shrink: 0;
    }
  }
`;
