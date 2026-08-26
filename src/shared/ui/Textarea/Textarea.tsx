import { forwardRef } from 'react';

import type { TextareaProps } from './Textarea.types';

import {
  TextareaContainer,
  TextareaLabel,
  StyledTextarea,
  ErrorMessage
} from './Textarea.styled';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      className = '',
      disabled = false,
      id,
      ...rest
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <TextareaContainer className={className}>
        {label && (
          <TextareaLabel
            htmlFor={textareaId}
            $hasError={hasError}
          >
            {label}
          </TextareaLabel>
        )}

        <StyledTextarea
          ref={ref}
          id={textareaId}
          $hasError={hasError}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...rest}
        />

        {error && (
          <ErrorMessage id={`${textareaId}-error`} role="alert">
            {error}
          </ErrorMessage>
        )}
      </TextareaContainer>
    );
  }
);

Textarea.displayName = 'Textarea';