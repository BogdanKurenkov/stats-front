import { FC } from 'react';
import {
  FieldContainer,
  FieldLabel,
  FieldError,
  RequiredMark
} from './FormField.styled';
import { FormFieldProps } from './FormField.types';

export const FormField: FC<FormFieldProps> = ({
  label,
  error,
  children,
  required,
}) => {
  return (
    <FieldContainer>
      {label && (
        <FieldLabel $error={!!error}>
          {label}
          {required && <RequiredMark>*</RequiredMark>}
        </FieldLabel>
      )}

      {children}

      {error && <FieldError role="alert">{error}</FieldError>}
    </FieldContainer>
  );
};