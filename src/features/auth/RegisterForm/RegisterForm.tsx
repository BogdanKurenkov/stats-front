import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDictionary } from '@/shared/lib/localization';

import { createRegisterSchema, RegisterFormData } from '@/features/auth/schemas';

import { Form, FormField, Input, PasswordInput, Button, CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

import { StyledFormWrapper, StyledFormContainer, StyledTitle } from './RegisterForm.styled';

export const RegisterForm: FC = () => {
  const dict = useDictionary();
  const data = dict.registerForm;
  const validation = dict.validation;

  const registerSchema = createRegisterSchema({
    nameRequired: validation.name.required,
    nameMin: validation.name.min,
    emailRequired: validation.email.required,
    emailInvalid: validation.email.invalid,
    password: {
      min: validation.password.min,
      uppercase: validation.password.uppercase,
      digit: validation.password.digit,
    },
    confirmPasswordRequired: validation.confirmPassword.required,
    confirmPasswordMatch: validation.confirmPassword.match,
  });

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
          {data.title}
        </StyledTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField label={data.nameLabel} error={errors.name?.message} required>
            <Input
              placeholder={data.namePlaceholder}
              error={errors.name?.message}
              {...register('name')}
            />
          </FormField>

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
              {...register('password')}
            />
          </FormField>

          <FormField label={data.confirmPasswordLabel} error={errors.confirmPassword?.message} required>
            <PasswordInput
              placeholder={data.confirmPasswordPlaceholder}
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
            {isSubmitting ? data.submittingButton : data.submitButton}
          </Button>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <CustomLink href={ROUTES.LOGIN} variant="secondary">
              {data.loginLink}
            </CustomLink>
          </div>
        </Form>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};