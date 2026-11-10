import styled from "styled-components";

export const WidgetContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.background};
  padding: 40px 20px;
  font-family: inherit;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MainTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[200]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
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
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange.secondary};
  }

  &::after {
    content: "→";
    font-size: 18px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.black.card};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

export const CardTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const LeagueRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Flag = styled.span`
  font-size: 16px;
  line-height: 1;
`;

export const DateTimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray[500]};
  padding-left: 24px;
`;

export const TeamsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 40%;
`;

export const TeamLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export const TeamName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
`;

export const VsText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PredictionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray[700]};
`;

export const PredictionTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Coefficient = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  background-color: ${({ theme }) => theme.colors.orange.tintStrong};
  border: 1px solid ${({ theme }) => theme.colors.orange.border};
  padding: 4px 8px;
  border-radius: 6px;
`;

export const ItemDescription = styled.p`
  margin: 0 0 24px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.5;
  overflow-wrap: anywhere;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 11px;
    line-height: 1.45;
  }
`;

export const ExpertSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ExpertLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const RatingBar = styled.div`
  display: flex;
  gap: 4px;
`;

export const RatingSegment = styled.div<{ $active: boolean }>`
  height: 4px;
  width: 16px;
  border-radius: 2px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.orange.primary : theme.colors.gray[700]};
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  & > button {
    width: 100%;
  }
`;
