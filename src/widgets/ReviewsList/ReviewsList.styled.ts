import styled from "styled-components";

export const ReviewsWrapper = styled.div`
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ReviewCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black.primary};
  background-color: ${({ theme }) => theme.colors.orange.primary};
`;

export const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

export const AuthorName = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const VerifiedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black.primary};
  background-color: ${({ theme }) => theme.colors.status.success};
  flex-shrink: 0;
  margin-top: -2px;
`;

export const DateText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const BookmakerName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.orange.primary};
  letter-spacing: 1px;
`;

export const ReviewText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const EmptyState = styled.div`
  padding: 48px 24px;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  border: 1px dashed ${({ theme }) => theme.colors.gray[800]};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
