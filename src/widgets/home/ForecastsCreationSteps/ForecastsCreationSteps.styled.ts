import styled from "styled-components";

import { Title, Paragraph } from "@/shared";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

export const Description = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StepCard = styled.div<{ $isActive?: boolean }>`
  position: relative;
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.orange.primary : theme.colors.gray[800]};
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.orange.primary : theme.colors.gray[600]};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

export const StepIconWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange.primary} 0%,
    ${({ theme }) => theme.colors.orange.dark} 100%
  );
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black.primary};

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2.5;
  }
`;

export const StepBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 9px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  line-height: 1;
`;

export const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StepTitle = styled(Title)`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 15px;
  }
`;

export const StepDescription = styled(Paragraph)`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
  }
`;

export const DetailsPanel = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 12px;
  padding: 24px;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
`;

export const DetailsIconWrapper = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange.primary} 0%,
    ${({ theme }) => theme.colors.orange.dark} 100%
  );
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.black.primary};

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 44px;
    height: 44px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DetailsContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

export const DetailsTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailsLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const DetailsTitle = styled(Title)`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[600]};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const DetailsText = styled(Paragraph)`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13px;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
`;

export const ProgressText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 2px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $width: string }>`
  height: 100%;
  width: ${({ $width }) => $width};
  background-color: ${({ theme }) => theme.colors.orange.primary};
  border-radius: 2px;
  transition: width 0.3s ease;
`;
