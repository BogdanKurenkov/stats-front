import { forwardRef } from 'react';
import { StyledLink } from './CustomLink.styled';
import { CustomLinkProps } from './CustomLink.types';

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>((props, ref) => {
  const {
    children,
    href,
    variant = 'default',
    target,
    rel,
    className,
    ...rest
  } = props;

  const linkRel = target === '_blank'
    ? rel || 'noopener noreferrer'
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
});

CustomLink.displayName = 'CustomLink';