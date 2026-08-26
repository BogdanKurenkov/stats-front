import { forwardRef } from 'react';

import { ContainerProps } from './Container.types';

import { ContainerWrapper } from './Container.styled';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ContainerWrapper ref={ref} {...rest}>
        {children}
      </ContainerWrapper>
    );
  }
);

Container.displayName = 'Container';