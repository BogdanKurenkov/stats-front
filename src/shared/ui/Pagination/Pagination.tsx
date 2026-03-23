import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { PaginationProps } from './Pagination.types';

import {
  PaginationContainer,
  PaginationButton,
  PaginationInfo,
  PaginationCurrent,
} from './Pagination.styled';


export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  return (
    <PaginationContainer className={className}>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        <ChevronLeft size={18} />
      </PaginationButton>

      <PaginationInfo>
        <PaginationCurrent>{currentPage}</PaginationCurrent> / {totalPages}
      </PaginationInfo>

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
      >
        <ChevronRight size={18} />
      </PaginationButton>
    </PaginationContainer>
  );
};