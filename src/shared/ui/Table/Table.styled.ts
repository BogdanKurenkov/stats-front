import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const TableHeaderCell = styled.th<{ $align?: string; $width?: string }>`
  padding: 12px 8px;
  text-align: ${({ $align }) => $align || "left"};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[300]};
  width: ${({ $width }) => $width || "auto"};
  white-space: nowrap;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black.secondary};
  }
`;

export const TableCell = styled.td<{ $align?: string }>`
  padding: 12px 8px;
  text-align: ${({ $align }) => $align || "left"};
  color: ${({ theme }) => theme.colors.gray[200]};
  white-space: nowrap;
`;
