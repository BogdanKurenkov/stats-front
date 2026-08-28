import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
  flex-wrap: wrap;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray[800]};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.gray[700]};
      border-color: ${({ theme }) => theme.colors.gray[600]};
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FormWrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding-right: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0;
    max-width: 100%;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.status.error};
  color: ${({ theme }) => theme.colors.status.error};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.status.error}15;
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button<{ $isLoading?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 32px;
  background: ${({ theme }) => theme.colors.orange.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ $isLoading }) => ($isLoading ? "not-allowed" : "pointer")};
  opacity: ${({ $isLoading }) => ($isLoading ? 0.6 : 1)};
  transition: all 0.2s ease;
  white-space: nowrap;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.orange.dark};
      transform: translateY(-1px);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 12px;
    justify-content: center;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray[800]};
      border-color: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 12px;
  }
`;
