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
    flex-direction: row;
    align-items: flex-start;
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
    line-height: 1.4;
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
  flex-shrink: 0;

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
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 12px 16px;
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
`;

export const FilterOption = styled.button<{
  $active?: boolean;
  $isReset?: boolean;
}>`
  background-color: ${({ theme, $active }) => ($active ? theme.colors.orange.primary : "transparent")};
  color: ${({ theme, $active, $isReset }) =>
    $active
      ? theme.colors.black.background
      : $isReset
        ? theme.colors.gray[400]
        : theme.colors.gray[300]};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.orange.primary : theme.colors.gray[700])};
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $active }) => ($active ? theme.colors.orange.primary : theme.colors.gray[500])};
      color: ${({ theme, $active, $isReset }) =>
        $active
          ? theme.colors.black.background
          : $isReset
            ? theme.colors.gray[200]
            : theme.colors.gray[100]};
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  margin-bottom: 24px;

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
      "header header"
      "match match"
      "prediction prediction"
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

  &.desktop-only {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none !important;
    }
  }
`;

export const DateCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[400]};
  white-space: nowrap;
`;

export const MatchCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[100]};
  min-width: 250px;

  .teams {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: nowrap;
  }

  .names {
    white-space: nowrap;
  }

  .mobile-coef {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex !important;
    grid-area: match;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-bottom: none;
    min-width: auto;

    .teams {
      gap: 6px;
      font-size: 14px;
      font-weight: 600;
      flex-wrap: wrap;
      white-space: normal;

      .names {
        white-space: normal;
      }
    }

    .mobile-coef {
      display: block;
      color: ${({ theme }) => theme.colors.orange.primary};
      font-size: 15px;
      font-weight: 600;
      white-space: nowrap;
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

export const PredictionCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[200]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block !important;
    grid-area: prediction;
    padding: 0 16px 12px;
    border-bottom: none;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const CoefCell = styled(Td)`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 500;
`;

export const ResultBadge = styled.span<{ $variant: "win" | "lose" | "return" }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  background-color: ${({ theme, $variant }) => {
    if ($variant === "win") return theme.colors.status.success;
    if ($variant === "lose") return theme.colors.status.error;
    return theme.colors.gray[700];
  }};
  color: #fff;
`;

export const IncomeCell = styled(Td)<{ $isWin: boolean; $isReturn?: boolean }>`
  font-weight: 600;
  color: ${({ theme, $isWin, $isReturn }) =>
    $isReturn
      ? theme.colors.gray[400]
      : $isWin
        ? theme.colors.status.success
        : theme.colors.status.error};
`;

export const HistoryMobileHeader = styled.td`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    grid-area: header;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 8px;

    .mobile-date {
      display: block;
      padding: 0;
      border: none;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;

export const HistoryMobileFooter = styled.td`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    grid-area: footer;
    padding: 12px 16px 16px;
    border-bottom: none;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    .label {
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    .value {
      font-weight: 600;

      &.win {
        color: ${({ theme }) => theme.colors.status.success};
      }

      &.lose {
        color: ${({ theme }) => theme.colors.status.error};
      }

      &.return {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`;

export const BottomBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.orange.border};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    gap: 12px;
  }
`;

export const BannerIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.tintStrong};
  color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 10px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 36px;
    height: 36px;
  }
`;

export const BannerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BannerTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`;

export const BannerText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
  }
`;

export const BannerAction = styled.div`
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;

    & > button {
      width: 100%;
      justify-content: center;
    }
  }
`;
