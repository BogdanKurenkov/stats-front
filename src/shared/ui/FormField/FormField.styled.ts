import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 16px;
`;

export const FieldLabel = styled.label<{ $error?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.status.error : theme.colors.gray[300]};
  transition: color 0.2s ease;
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-left: 2px;
`;

export const FieldError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 2px;
  display: block;
`;
