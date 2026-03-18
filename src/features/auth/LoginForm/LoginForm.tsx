import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, Input, Button, CustomLink, PasswordInput } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { loginSchema, LoginFormData } from '../schemas';
import { StyledFormWrapper, StyledTitle } from './LoginForm.styled';

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
      <StyledTitle>Вход в аккаунт</StyledTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="******"
            error={errors.password?.message}
            {...register('password')}
          />
        </FormField>

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Вход...' : 'Войти'}
        </Button>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <CustomLink href={ROUTES.REGISTER} variant="secondary">
            Нет аккаунта? Зарегистрироваться
          </CustomLink>
        </div>
      </Form>
    </StyledFormWrapper>
  );
};