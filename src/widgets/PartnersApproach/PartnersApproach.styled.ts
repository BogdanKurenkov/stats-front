import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px 16px;
    gap: 32px;
  }
`;

export const InfoBanner = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 16px;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 20px;
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.tintStrong};
  color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 20px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BannerTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.2;

  .highlight {
    color: ${({ theme }) => theme.colors.orange.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const BannerSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.5;
`;

export const BannerList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin: 0;
  padding: 0;
  list-style: none;
  align-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1 / -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const BannerListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const BannerItemNumber = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-top: 2px;
`;

export const BannerItemText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[200]};
  line-height: 1.4;
`;

export const StepsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StepsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StepsKicker = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const StepsTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};

  .highlight {
    color: ${({ theme }) => theme.colors.orange.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const StepsRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 2px;
  }
`;

export const StepCard = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

export const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.black.background};
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StepTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const StepDescription = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;
`;

export const StepArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.orange.primary};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: rotate(90deg);
    padding: 8px 0;
  }
`;
