import styled from "styled-components";

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 820px;
`;

export const RatingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    padding: 16px;
    gap: 14px;
  }
`;

export const RankBadge = styled.div<{ $rank: number }>`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme, $rank }) =>
    $rank <= 3 ? theme.colors.black.primary : theme.colors.gray[100]};
  background-color: ${({ theme, $rank }) => {
    if ($rank === 1) return theme.colors.orange.primary;
    if ($rank === 2) return theme.colors.orange.secondary;
    if ($rank === 3) return theme.colors.orange.dark;
    return theme.colors.gray[800];
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 36px;
    height: 36px;
    font-size: 15px;
    border-radius: 10px;
  }
`;

export const BookmakerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const BookmakerName = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const BookmakerSummary = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;

export const BookmakerStats = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const RatingValue = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
  white-space: nowrap;
`;

export const ReviewsCount = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[500]};
  white-space: nowrap;
`;
