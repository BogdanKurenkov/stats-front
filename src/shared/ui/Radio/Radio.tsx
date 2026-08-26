import { forwardRef } from 'react';

import type { RadioProps } from './Radio.types';

import {
  RadioContainer,
  RadioWrapper,
  HiddenRadio,
  StyledRadio,
  Label,
  ErrorMessage,
} from './Radio.styled';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      error,
      className = '',
      disabled = false,
      checked,
      id,
      ...rest
    },
    ref
  ) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const isChecked = !!checked;

    return (
      <RadioContainer className={className}>
        <RadioWrapper htmlFor={radioId}>
          <HiddenRadio
            ref={ref}
            id={radioId}
            type="radio"
            checked={checked}
            disabled={disabled}
            aria-invalid={hasError}
            {...rest}
          />
          <StyledRadio
            $checked={isChecked}
            $error={hasError}
            $disabled={disabled}
            aria-hidden="true"
          />
          {label && (
            <Label $disabled={disabled} $error={hasError}>
              {label}
            </Label>
          )}
        </RadioWrapper>
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      </RadioContainer>
    );
  }
);

Radio.displayName = 'Radio';