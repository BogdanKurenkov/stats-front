import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px 0;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[300]};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.orange.primary};
    border-color: ${({ theme }) => theme.colors.orange.primary};
    color: ${({ theme }) => theme.colors.black.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    outline-offset: 2px;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PaginationCurrent = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
`;
