import { FC, MouseEvent } from 'react';
import { useScrollLock, useEventListener } from 'usehooks-ts';

import { OverlayProps } from './Overlay.types';
import { OverlayContainer } from './Overlay.styled';

export const Overlay: FC<OverlayProps> = ({
  isOpen,
  onClose,
  className,
  children,
}) => {
  useScrollLock({ autoLock: isOpen });

  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && onClose && isOpen) {
      onClose();
    }
  });

  const handleClick = (e: MouseEvent) => {
    if (onClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <OverlayContainer
      $isOpen={isOpen}
      className={className}
      onClick={handleClick}
      role="presentation"
    >
      {children}
    </OverlayContainer>
  );
};

Overlay.displayName = 'Overlay';