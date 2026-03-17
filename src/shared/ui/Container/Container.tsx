import { forwardRef } from 'react';
import { ContainerWrapper } from './Container.styled';
import { ContainerProps } from './Container.types';

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ContainerWrapper ref={ref} {...rest}>
      {children}
    </ContainerWrapper>
  );
});

Container.displayName = 'Container';