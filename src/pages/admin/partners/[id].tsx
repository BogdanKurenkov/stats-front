import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, Trash2, Save, Loader2 } from 'lucide-react';

import { BONUSES_DATA } from '@/widgets/bonuses/BonusesList/BonusesList.constants';

import { NextPageWithLayout } from '@/shared/types';
import { SEO } from '@/shared';
import { Form } from '@/shared/ui';
import { FormField } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Textarea } from '@/shared/ui';

import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
  flex-wrap: wrap;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray[800]};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.gray[700]};
      border-color: ${({ theme }) => theme.colors.gray[600]};
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FormWrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding-right: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0;
    max-width: 100%;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.status.error};
  color: ${({ theme }) => theme.colors.status.error};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.status.error}15;
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button<{ $isLoading?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 32px;
  background: ${({ theme }) => theme.colors.orange.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ $isLoading }) => ($isLoading ? "not-allowed" : "pointer")};
  opacity: ${({ $isLoading }) => ($isLoading ? 0.6 : 1)};
  transition: all 0.2s ease;
  white-space: nowrap;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.orange.dark};
      transform: translateY(-1px);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 12px;
    justify-content: center;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray[800]};
      border-color: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 12px;
  }
`;

export interface PartnerFormData {
  id: string;
  title: string;
  amount: string;
  subtitle: string;
  bonusAmount: string;
  minOdds: string;
  wagering: string;
  buttonText: string;
  terms: string;
}


export const partnerFormSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Заголовок обязателен"),
  amount: z.string().min(1, "Сумма обязательна"),
  subtitle: z.string().min(1, "Подзаголовок обязателен"),
  bonusAmount: z.string().min(1, "Сумма бонуса обязательна"),
  minOdds: z.string().min(1, "Минимальный коэффициент обязателен"),
  wagering: z.string().min(1, "Вейджер обязателен"),
  buttonText: z.string().min(1, "Текст кнопки обязателен"),
  terms: z.string().min(1, "Условия обязательны"),
});

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;


export const PLACEHOLDERS = {
  TITLE: "Например: Бонус 120% до",
  AMOUNT: "Например: 400 $",
  SUBTITLE: "Например: на первый депозит",
  BONUS_AMOUNT: "Например: 400 $",
  MIN_ODDS: "Например: 1.40",
  WAGERING: "Например: 5",
  BUTTON_TEXT: "Например: Получить бонус",
  TERMS: "Условия бонуса...",
};

export const FIELD_LABELS = {
  TITLE: "Заголовок",
  AMOUNT: "Сумма бонуса в заголовке",
  SUBTITLE: "Подзаголовок",
  BONUS_AMOUNT: "Сумма бонуса",
  MIN_ODDS: "Минимальный коэффициент",
  WAGERING: "Вейджер",
  BUTTON_TEXT: "Текст кнопки",
  TERMS: "Условия",
};


const DEFAULT_VALUES: PartnerFormValues = {
  id: '',
  title: '',
  amount: '',
  subtitle: '',
  bonusAmount: '',
  minOdds: '',
  wagering: '',
  buttonText: '',
  terms: '',
};

const AdminDashboardPartner: NextPageWithLayout = () => {
  const router = useRouter();

  const { id } = router.query;

  const isEditMode = !!id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (isEditMode && id) {
      const bonus = BONUSES_DATA.find((item) => item.id === id);
      if (bonus) {
        reset({
          id: bonus.id,
          title: bonus.title,
          amount: bonus.amount,
          subtitle: bonus.subtitle,
          bonusAmount: bonus.bonusAmount,
          minOdds: bonus.minOdds,
          wagering: bonus.wagering,
          buttonText: bonus.buttonText,
          terms: bonus.terms,
        });
      }
    }
  }, [isEditMode, id, reset]);

  const onSubmit = async (data: PartnerFormValues) => {
    console.log('Сохранение данных:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push('/admin/partners');
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить этого партнера?')) {
      console.log('Удаление партнера:', id);
      setTimeout(() => {
        router.push('/admin/partners');
      }, 1000);
    }
  };

  const handleCancel = () => {
    router.push('/admin/partners');
  };

  return (
    <>
      <SEO title={isEditMode ? 'Редактирование партнера' : 'Создание партнера'} noIndex={true} />
      <PageContainer>
        <Header>
          <HeaderLeft>
            <BackButton onClick={handleCancel} aria-label="Назад">
              <ChevronLeft />
            </BackButton>
            <Title>{isEditMode ? 'Редактирование партнера' : 'Создание партнера'}</Title>
          </HeaderLeft>
          <Actions>
            {isEditMode && (
              <DeleteButton onClick={handleDelete} disabled={isSubmitting}>
                <Trash2 size={18} />
                Удалить
              </DeleteButton>
            )}
          </Actions>
        </Header>

        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField label={FIELD_LABELS.TITLE} required error={errors.title?.message}>
              <Input
                placeholder={PLACEHOLDERS.TITLE}
                error={errors.title?.message}
                {...register('title')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.AMOUNT} required error={errors.amount?.message}>
              <Input
                placeholder={PLACEHOLDERS.AMOUNT}
                error={errors.amount?.message}
                {...register('amount')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.SUBTITLE} required error={errors.subtitle?.message}>
              <Input
                placeholder={PLACEHOLDERS.SUBTITLE}
                error={errors.subtitle?.message}
                {...register('subtitle')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.BONUS_AMOUNT} required error={errors.bonusAmount?.message}>
              <Input
                placeholder={PLACEHOLDERS.BONUS_AMOUNT}
                error={errors.bonusAmount?.message}
                {...register('bonusAmount')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.MIN_ODDS} required error={errors.minOdds?.message}>
              <Input
                placeholder={PLACEHOLDERS.MIN_ODDS}
                error={errors.minOdds?.message}
                {...register('minOdds')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.WAGERING} required error={errors.wagering?.message}>
              <Input
                placeholder={PLACEHOLDERS.WAGERING}
                error={errors.wagering?.message}
                {...register('wagering')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.BUTTON_TEXT} required error={errors.buttonText?.message}>
              <Input
                placeholder={PLACEHOLDERS.BUTTON_TEXT}
                error={errors.buttonText?.message}
                {...register('buttonText')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.TERMS} required error={errors.terms?.message}>
              <Textarea
                placeholder={PLACEHOLDERS.TERMS}
                error={errors.terms?.message}
                rows={6}
                {...register('terms')}
              />
            </FormField>

            <FormActions>
              <CancelButton type="button" onClick={handleCancel} disabled={isSubmitting}>
                Отмена
              </CancelButton>
              <SaveButton type="submit" $isLoading={isSubmitting} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} />
                    Сохранение...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Сохранить
                  </>
                )}
              </SaveButton>
            </FormActions>
          </Form>
        </FormWrapper>
      </PageContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
      headers: {
        cookie: ctx.req.headers.cookie || '',
      },
    });

    const session = await res.json();
    const isAdmin = session.user?.role === 'admin';

    if (!isAdmin) {
      return {
        notFound: true,
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

AdminDashboardPartner.layout = "admin";

export default AdminDashboardPartner;