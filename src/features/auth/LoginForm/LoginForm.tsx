import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, LoginFormData } from '@/features/auth/schemas';

import { Form, FormField, Input, PasswordInput, Button, CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

import { StyledFormWrapper, StyledFormContainer, StyledTitle } from './LoginForm.styled';

export const LoginForm: FC = () => {
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
          Вход в аккаунт
        </StyledTitle>

        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormField label="Email" error={errors.email?.message} required>
            <Input
              type="email"
              placeholder="example@mail.com"
              error={errors.email?.message}
              {...register('email')}
            />
          </FormField>

          <FormField label="Пароль" error={errors.password?.message} required>
            <PasswordInput
              placeholder="Пароль"
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
            {isSubmitting ? 'Вход...' : 'Войти'}
          </Button>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <CustomLink href={ROUTES.REGISTER} variant="secondary">
              Нет аккаунта? Зарегистрироваться
            </CustomLink>
          </div>
        </Form>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};