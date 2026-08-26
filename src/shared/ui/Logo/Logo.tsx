import type { FC } from 'react';
import { Icon } from 'lucide-react';
import { soccerBall } from '@lucide/lab';

import { ROUTES } from '@/shared/config';

import type { LogoProps } from './Logo.types';

import { LOGO_SIZES } from './Logo.constants';

import { LogoLink, LogoIconWrapper } from './Logo.styled';

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
      <LogoIconWrapper>
        <Icon
          iconNode={soccerBall}
          size={size}
          strokeWidth={1.8}
          color="currentColor"
        />
      </LogoIconWrapper>
    </LogoLink>
  );
};