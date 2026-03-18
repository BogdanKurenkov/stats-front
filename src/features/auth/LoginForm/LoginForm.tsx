import { FC, useState } from 'react';
import { Form, FormField } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { StyledFormWrapper, StyledTitle } from './LoginForm.styled';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.includes('@')) {
      newErrors.email = 'Введите корректный email';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login data:', formData);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledTitle>Вход в аккаунт</StyledTitle>

      <Form onSubmit={handleSubmit}>
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
            placeholder="******"
          />
        </FormField>

        <Button type="submit" variant="primary" size="large">
          Войти
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