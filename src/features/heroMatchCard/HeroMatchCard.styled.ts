import styled from "styled-components";

export const MatchCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: rgba(20, 20, 20, 0.72);
  backdrop-filter: blur(14px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.orange.tintStrong};
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.orange.tint},
    0 20px 60px -20px ${({ theme }) => theme.colors.orange.glow};
  grid-column: 2;
  grid-row: 1 / span 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1;
    grid-row: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MatchCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const MatchCardLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};

  svg {
    flex-shrink: 0;
    filter: drop-shadow(0 0 6px ${({ theme }) => theme.colors.orange.glow});
  }
`;

export const MatchCardMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: right;
`;

export const Odds = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.orange.tintStrong};
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.orange.secondary};
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.orange.glow};
`;

export const TeamsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const Team = styled.div<{ $align: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) =>
    $align === "left" ? "flex-start" : "flex-end"};
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const TeamLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const Versus = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
`;

export const PredictionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PredictionLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PredictionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PredictionText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const PredictionNote = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const MatchCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
