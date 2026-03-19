import { forwardRef } from 'react';
import {
  RadioContainer,
  RadioWrapper,
  HiddenRadio,
  StyledRadio,
  Label,
  ErrorMessage,
} from './Radio.styled';
import { RadioProps } from './Radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    label,
    error,
    className = '',
    disabled = false,
    checked,
    id,
    ...rest
  } = props;

  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <RadioContainer className={className}>
      <RadioWrapper htmlFor={radioId}>
        <HiddenRadio
          ref={ref}
          id={radioId}
          type="radio"
          checked={checked}
          disabled={disabled}
          aria-invalid={!!error}
          {...rest}
        />
        <StyledRadio
          $checked={!!checked}
          $error={!!error}
          $disabled={disabled}
          aria-hidden="true"
        />
        {label && (
          <Label $disabled={disabled} $error={!!error}>
            {label}
          </Label>
        )}
      </RadioWrapper>
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
    </RadioContainer>
  );
});

Radio.displayName = 'Radio';