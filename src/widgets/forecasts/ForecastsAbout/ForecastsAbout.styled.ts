import styled from "styled-components";
import { Title, Paragraph } from "@/shared/ui";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HighlightText = styled(Paragraph)`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ApproachCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
  }
`;

export const ApproachTitle = styled(Title)`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const ApproachDescription = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const FactorsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FactorItem = styled.li`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "✓";
    color: ${({ theme }) => theme.colors.orange.primary};
    font-weight: bold;
  }
`;

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const AdvantageCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
    transform: translateY(-2px);
  }
`;

export const AdvantageNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-bottom: 12px;
`;

export const AdvantageTitle = styled(Title)`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const AdvantageDescription = styled(Paragraph)`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const FeatureTitle = styled(Title)`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const FeatureDescription = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 14px;
`;

export const DisclaimerBox = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  margin-top: 16px;
`;

export const DisclaimerText = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 13px;
  font-style: italic;
  text-align: center;
`;
