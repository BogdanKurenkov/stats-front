import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDictionary } from '@/shared/lib/localization';

import { createLoginSchema, LoginFormData } from '@/features/auth/schemas';

import { Form, FormField, Input, PasswordInput, Button, CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

import { StyledFormWrapper, StyledFormContainer, StyledTitle } from './LoginForm.styled';

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

          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            style={{ marginTop: '16px' }}
          >
            {isSubmitting ? data.submittingButton : data.submitButton}
          </Button>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <CustomLink href={ROUTES.REGISTER} variant="secondary">
              {data.registerLink}
            </CustomLink>
          </div>
        </Form>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};