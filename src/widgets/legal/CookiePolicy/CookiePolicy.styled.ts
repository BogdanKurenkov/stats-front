import styled from "styled-components";

import { Paragraph } from "@/shared/ui";

export const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
`;

export const LastUpdate = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 14px;
  margin-top: -16px;
`;

export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  color: ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const TableCell = styled.td`
  padding: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
