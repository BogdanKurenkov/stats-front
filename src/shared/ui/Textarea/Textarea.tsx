import { forwardRef } from 'react';
import {
  TextareaContainer,
  TextareaLabel,
  StyledTextarea,
  ErrorMessage
} from './Textarea.styled';
import { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    label,
    error,
    className = '',
    disabled = false,
    id,
    ...rest
  } = props;

  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <TextareaContainer className={className}>
      {label && (
        <TextareaLabel
          htmlFor={textareaId}
          $hasError={!!error}
        >
          {label}
        </TextareaLabel>
      )}

      <StyledTextarea
        ref={ref}
        id={textareaId}
        $hasError={!!error}
        disabled={disabled}
        aria-invalid={!!error}
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
});

Textarea.displayName = 'Textarea';