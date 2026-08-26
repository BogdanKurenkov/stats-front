import type { FC } from 'react';

import { colors } from '@/shared/styles';
import { Spinner } from '@/shared';

import type { GlobalSpinnerProps } from './GlobalSpinner.types';

import { StyledWrapper } from './GlobalSpinner.styled';


export const GlobalSpinner: FC<GlobalSpinnerProps> = ({
  fullScreen = true,
  overlay = true,
  zIndex = 9999,
  size = 48,
  color = colors.orange.primary,
  type = 'spinner',
  ...rest
}) => {
  return (
    <StyledWrapper
      $fullScreen={fullScreen}
      $overlay={overlay}
      $zIndex={zIndex}
    >
      <Spinner size={size} color={color} type={type} {...rest} />
    </StyledWrapper>
  );
};

GlobalSpinner.displayName = 'GlobalSpinner';