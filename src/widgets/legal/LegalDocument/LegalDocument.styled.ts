import styled from "styled-components";

import { Title, Paragraph } from "@/shared/ui";

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

export const Subtitle = styled(Title)`
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 24px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.6;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
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
  vertical-align: top;
`;

export const NoteBox = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-left: 4px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 12px;
  padding: 24px;
`;
