import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check } from 'lucide-react';
import {
  StyledLabel,
  Container,
  StyledContent,
  StyledError,
  StyledIcon,
  StyledItem,
  StyledItemIndicator,
  StyledItemText,
  StyledTrigger,
  StyledViewport
} from './Select.styled';
import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      options,
      placeholder = 'Выберите...',
      label,
      error,
      disabled,
      className,
    },
    ref
  ) => {
    return (
      <Container className={className}>
        {label && <StyledLabel $hasError={!!error}>{label}</StyledLabel>}
        <SelectPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
        >
          <StyledTrigger ref={ref} $hasError={!!error}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <StyledIcon />
          </StyledTrigger>

          <SelectPrimitive.Portal>
            <StyledContent position="popper" sideOffset={4}>
              <StyledViewport>
                {options.map((option) => (
                  <StyledItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    $disabled={option.disabled}
                  >
                    <StyledItemText>{option.label}</StyledItemText>
                    <StyledItemIndicator>
                      <Check size={16} />
                    </StyledItemIndicator>
                  </StyledItem>
                ))}
              </StyledViewport>
            </StyledContent>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
        {error && <StyledError role="alert">{error}</StyledError>}
      </Container>
    );
  }
);

Select.displayName = 'Select';