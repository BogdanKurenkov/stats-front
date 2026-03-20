import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, Input, PasswordInput, Button, CustomLink, Title } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { registerSchema, RegisterFormData } from '@/features/auth/schemas';
import { StyledFormWrapper, StyledFormContainer, StyledTitle } from './RegisterForm.styled';

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log('Register data:', data);
  };

  return (
    <StyledFormWrapper>
      <StyledFormContainer>
        <StyledTitle as="h2" level="h2">
          Регистрация
        </StyledTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField label="Имя" error={errors.name?.message} required>
            <Input
              placeholder="Введите имя"
              error={errors.name?.message}
              {...register('name')}
            />
          </FormField>

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
              placeholder="Минимум 6 символов"
              error={errors.password?.message}
              {...register('password')}
            />
          </FormField>

          <FormField label="Подтверждение пароля" error={errors.confirmPassword?.message} required>
            <PasswordInput
              placeholder="Повторите пароль"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
          </FormField>

          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            style={{ marginTop: '16px' }}
          >
            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
          </Button>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <CustomLink href={ROUTES.LOGIN} variant="secondary">
              Уже есть аккаунт? Войти
            </CustomLink>
          </div>
        </Form>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};