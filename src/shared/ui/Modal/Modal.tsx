import { FC, MouseEvent } from 'react';

import { Overlay } from '@/shared/ui';

import { ModalProps } from './Modal.types';

import { ModalContainer, ModalCloseButton, ModalContent } from './Modal.styled';

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  className = '',
  children,
  withCloseButton = false,
}) => {
  const handleModalClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <ModalContainer
        className={className}
        onClick={handleModalClick}
        role="dialog"
        aria-modal="true"
      >
        {withCloseButton && (
          <ModalCloseButton
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </ModalCloseButton>
        )}

        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

Modal.displayName = 'Modal';