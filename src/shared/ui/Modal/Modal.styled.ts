import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${slideIn} 0.3s ease-out;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};

  @media (max-width: 480px) {
    width: 95%;
    border-radius: 8px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.orange.primary};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange.primary};
    color: ${({ theme }) => theme.colors.black.primary};
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    font-size: 20px;
  }
`;

export const ModalContent = styled.div`
  padding: 24px;
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: 480px) {
    padding: 20px;
  }
`;
