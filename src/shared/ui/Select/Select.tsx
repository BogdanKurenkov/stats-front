import { forwardRef, useId } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import { RequiredMark } from '@/shared/ui';

import { SelectProps } from './Select.types';

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
  StyledViewport,
  VisuallyHidden,
} from './Select.styled';

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
      name,
      required,
      renderValue,
    },
    ref
  ) => {
    const labelId = useId();
    const valueId = useId();
    const errorId = useId();

    const selectedOption = options.find(opt => opt.value === value);
    const currentValueText = selectedOption?.label ?? placeholder;

    const ariaLabelledBy = label
      ? `${labelId} ${valueId}`
      : valueId;

    const ariaDescribedBy = error ? errorId : undefined;

    return (
      <Container className={className}>
        {label && (
          <StyledLabel id={labelId} $hasError={!!error}>
            {label}
            {required && <RequiredMark />}
          </StyledLabel>
        )}

        <SelectPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          name={name}
          required={required}
        >
          <StyledTrigger
            ref={ref}
            $hasError={!!error}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          >
            {/* Скрытый текст для скринридера */}
            <VisuallyHidden as="span" id={valueId}>
              {currentValueText}
            </VisuallyHidden>

            {/* Видимое содержимое */}
            <SelectPrimitive.Value placeholder={placeholder}>
              {renderValue && value
                ? renderValue(value, selectedOption)
                : undefined}
            </SelectPrimitive.Value>
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

        {error && (
          <StyledError id={errorId} role="alert">
            {error}
          </StyledError>
        )}

        {name && (
          <input
            type="hidden"
            name={name}
            value={value || ''}
            disabled={disabled}
          />
        )}
      </Container>
    );
  }
);

Select.displayName = 'Select';