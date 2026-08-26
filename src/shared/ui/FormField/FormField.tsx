import { FC } from 'react';

import { RequiredMark } from '@/shared/ui';

import type { FormFieldProps } from './FormField.types';

import {
  FieldContainer,
  FieldLabel,
  FieldError,
} from './FormField.styled';

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