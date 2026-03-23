import { FC } from 'react';
import {
  FieldContainer,
  FieldLabel,
  FieldError,
} from './FormField.styled';
import { FormFieldProps } from './FormField.types';
import { RequiredMark } from '@/shared/ui';

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
          {required && <RequiredMark />}
        </FieldLabel>
      )}

      {children}

      {error && <FieldError role="alert">{error}</FieldError>}
    </FieldContainer>
  );
};