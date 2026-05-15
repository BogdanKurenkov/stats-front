import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { createLoginSchema, LoginFormData } from '@/features/auth/schemas';

import { useDictionary } from '@/shared/lib/localization';
import { Form, FormField, Input, PasswordInput, CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

import { StyledFormWrapper, StyledFormContainer, StyledTitle, StyledButton, StyledWrapper } from './LoginForm.styled';

export const LoginForm: FC = () => {
  const dict = useDictionary();
  const data = dict.loginForm;
  const validation = dict.validation;

  const loginSchema = createLoginSchema({
    emailRequired: validation.email.required,
    emailInvalid: validation.email.invalid,
    password: {
      min: validation.password.min,
      uppercase: validation.password.uppercase,
      digit: validation.password.digit,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log('Login data:', data);
  };

  return (
    <StyledFormWrapper>
      <StyledFormContainer>
        <StyledTitle as="h2" level="h2">
          {data.title}
        </StyledTitle>

        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormField label={data.emailLabel} error={errors.email?.message} required>
            <Input
              type="email"
              placeholder={data.emailPlaceholder}
              error={errors.email?.message}
              {...register('email')}
            />
          </FormField>

          <FormField label={data.passwordLabel} error={errors.password?.message} required>
            <PasswordInput
              placeholder={data.passwordPlaceholder}
              error={errors.password?.message}
              autoComplete="current-password"
              {...register('password')}
            />
          </FormField>

          <StyledButton
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? data.submittingButton : data.submitButton}
          </StyledButton>

          <StyledWrapper>
            <CustomLink href={ROUTES.REGISTER} variant="secondary">
              {data.registerLink}
            </CustomLink>
          </StyledWrapper>
        </Form>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};