import { FC } from 'react';

import { TableProps } from './Table.types';

import {
  TableWrapper,
  StyledTable,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './Table.styled';


export const Table: FC<TableProps> = ({ columns, data, className }) => {
  return (
    <TableWrapper className={className}>
      <StyledTable>
        <TableHeader>
          <tr>
            {columns.map((col) => (
              <TableHeaderCell
                key={col.key}
                $align={col.align}
                $width={col.width}
              >
                {col.label}
              </TableHeaderCell>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col.key} $align={col.align}>
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};