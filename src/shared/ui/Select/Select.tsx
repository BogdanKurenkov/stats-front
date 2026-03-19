import { forwardRef, useState } from 'react';
import {
  SelectContainer,
  SelectLabel,
  SelectWrapper,
  StyledSelect,
  SelectIcon,
  ErrorMessage,
} from './Select.styled';
import { SelectProps, SelectOption } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    label,
    error,
    options,
    placeholder,
    className = '',
    disabled = false,
    id,
    value,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsOpen(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsOpen(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
  };

  return (
    <SelectContainer className={className}>
      {label && (
        <SelectLabel htmlFor={selectId} $hasError={!!error}>
          {label}
        </SelectLabel>
      )}

      <SelectWrapper>
        <StyledSelect
          ref={ref}
          id={selectId}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          $hasError={!!error}
          aria-invalid={!!error}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option: SelectOption) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>

        <SelectIcon $isOpen={isOpen} />
      </SelectWrapper>

      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
    </SelectContainer>
  );
});

Select.displayName = 'Select';