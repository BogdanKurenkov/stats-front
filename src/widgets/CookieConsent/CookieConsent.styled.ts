import styled, { keyframes } from "styled-components";
import { Title, Button } from "@/shared/ui";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${slideUp} 0.3s ease-out;
  pointer-events: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    gap: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  min-width: 280px;
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.orange.primary};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ActionButton = styled(Button)`
  white-space: nowrap;
`;
