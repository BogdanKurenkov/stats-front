import { FC, useState } from 'react';
import { Form, FormField } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { StyledFormWrapper, StyledTitle } from './RegisterForm.styled';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<RegisterFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Введите корректный email';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Register data:', formData);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledTitle>Регистрация</StyledTitle>

      <Form onSubmit={handleSubmit}>
        <FormField label="Имя" error={errors.name} required>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Введите имя"
          />
        </FormField>

        <FormField label="Email" error={errors.email} required>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="example@mail.com"
          />
        </FormField>

        <FormField label="Пароль" error={errors.password} required>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Минимум 6 символов"
          />
        </FormField>

        <FormField label="Подтверждение пароля" error={errors.confirmPassword} required>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="Повторите пароль"
          />
        </FormField>

        <Button type="submit" variant="primary" size="large">
          Зарегистрироваться
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