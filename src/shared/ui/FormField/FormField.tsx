import { FC, Children, cloneElement, isValidElement } from 'react';
import { FieldContainer, FieldLabel, FieldError, RequiredMark } from './FormField.styled';
import { FormFieldProps } from './FormField.types';

export const FormField: FC<FormFieldProps> = ({
  label,
  error,
  children,
  required,
}) => {
  const fieldId = `field-${Math.random().toString(36).substr(2, 9)}`;

  const child = Children.only(children);
  const inputElement = isValidElement(child)
    ? cloneElement(child, {
      id: fieldId,
      error: error,
    } as any)
    : children;

  return (
    <FieldContainer>
      {label && (
        <FieldLabel htmlFor={fieldId} $error={!!error}>
          {label}
          {required && <RequiredMark>*</RequiredMark>}
        </FieldLabel>
      )}

      {inputElement}

      {error && <FieldError role="alert">{error}</FieldError>}
    </FieldContainer>
  );
};