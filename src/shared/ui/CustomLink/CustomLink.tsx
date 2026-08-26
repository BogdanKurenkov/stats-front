import { forwardRef } from 'react';

import { CustomLinkProps } from './CustomLink.types';

import { DEFAULT_VARIANT, BLANK_TARGET, DEFAULT_REL_ATTRIBUTE } from './CustomLink.constants';

import { StyledLink } from './CustomLink.styled';

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    {
      children,
      href,
      variant = DEFAULT_VARIANT,
      target,
      rel,
      className,
      ...rest
    },
    ref
  ) => {
    const linkRel = target === BLANK_TARGET
      ? rel || DEFAULT_REL_ATTRIBUTE
      : rel;

    return (
      <StyledLink
        ref={ref}
        href={href}
        $variant={variant}
        target={target}
        rel={linkRel}
        className={className}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  }
);

CustomLink.displayName = 'CustomLink';