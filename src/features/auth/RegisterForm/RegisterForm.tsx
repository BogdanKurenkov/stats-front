import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, PasswordInput } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { registerSchema, RegisterFormData } from '../schemas';
import { StyledFormWrapper, StyledTitle } from './RegisterForm.styled';

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log('Register data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <StyledFormWrapper>
      <StyledTitle>Регистрация</StyledTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField label="Имя" error={errors.name?.message} required>
          <Input
            placeholder="Введите имя"
            {...register('name')}
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message} required>
          <Input
            type="email"
            placeholder="example@mail.com"
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
        >
          {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <CustomLink href={ROUTES.LOGIN} variant="secondary">
            Уже есть аккаунт? Войти
          </CustomLink>
        </div>
      </Form>
    </StyledFormWrapper>
  );
};