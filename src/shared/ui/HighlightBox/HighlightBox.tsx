import type { FC } from 'react';

import type { HighlightBoxProps } from './HighlightBox.types';

import { StyledHighlightBox } from './HighlightBox.styled';

export const HighlightBox: FC<HighlightBoxProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  return (
    <StyledHighlightBox $variant={variant} className={className}>
      {children}
    </StyledHighlightBox>
  );
};