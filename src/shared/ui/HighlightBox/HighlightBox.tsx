import { FC } from 'react';
import { StyledHighlightBox } from './HighlightBox.styled';
import { HighlightBoxProps } from './HighlightBox.types';

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