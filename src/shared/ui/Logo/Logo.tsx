import { FC } from 'react';
import { ROUTES } from '@/shared/config';
import { LogoLink, LogoImageWrapper, StyledImage } from './Logo.styled';
import { LogoProps } from './Logo.types';
import { LOGO_SIZES } from './Logo.constants';

const variantToSize = {
  small: LOGO_SIZES.SMALL,
  default: LOGO_SIZES.DEFAULT,
  large: LOGO_SIZES.LARGE,
};

export const Logo: FC<LogoProps> = ({ variant = 'default', className }) => {
  const size = variantToSize[variant];

  return (
    <LogoLink
      href={ROUTES.HOME}
      $size={size}
      className={className}
      aria-label="На главную"
      aria-current="home"
    >
      <LogoImageWrapper>
        <StyledImage
          src="/images/logo/logo.png"
          alt="Логотип Компании"
          fill
          priority
          sizes={`${size}px`}
        />
      </LogoImageWrapper>
    </LogoLink>
  );
};