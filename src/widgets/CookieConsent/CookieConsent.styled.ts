import styled, { keyframes } from "styled-components";

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

export const Title = styled.h3`
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

export const AcceptButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.black.primary};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange.dark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const RejectButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[300]};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
