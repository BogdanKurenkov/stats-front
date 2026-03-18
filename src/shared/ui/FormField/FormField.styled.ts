import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const FieldLabel = styled.label<{ $error?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.status.error : theme.colors.gray[300]};
`;

export const FieldError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-left: 2px;
`;
