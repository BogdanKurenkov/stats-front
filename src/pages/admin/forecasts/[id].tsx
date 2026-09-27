import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, Trash2, Save, Loader2, Plus, X } from 'lucide-react';
import { z } from 'zod';

import { FORECASTS } from '@/widgets/forecasts/ForecastsList/ForecastsList.constants';

import type { NextPageWithLayout } from '@/shared/types';
import { Seo } from '@/shared';
import { Form, FormField, Input, Textarea } from '@/shared';

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

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  svg {
    color: ${({ theme }) => theme.colors.orange.primary};
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Стили для коэффициентов
export const OddsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 4px;
`;

export const OddsTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[200]};
  margin: 0;
`;

export const OddsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OddsRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.black.primary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const OddsFieldGroup = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;

  > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const RemoveOddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin-top: 20px;

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.status.error}15;
      border-color: ${({ theme }) => theme.colors.status.error};
      color: ${({ theme }) => theme.colors.status.error};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
    align-self: flex-end;
  }
`;

export const AddOddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  border: 1px dashed ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.orange.primary};
      color: ${({ theme }) => theme.colors.orange.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`;

const oddSchema = z.object({
  label: z.string().min(1, 'Название обязательно'),
  value: z.string().min(1, 'Значение обязательно'),
});

// Схема для всего прогноза
const forecastFormSchema = z.object({
  id: z.number(),
  sport: z.string().min(1, 'Вид спорта обязателен'),
  date: z.string().min(1, 'Дата обязательна'),
  time: z.string().min(1, 'Время обязательно'),
  homeTeam: z.string().min(1, 'Название команды обязательно'),
  awayTeam: z.string().min(1, 'Название команды обязательно'),
  odds: z.array(oddSchema).min(1, 'Добавьте хотя бы один коэффициент'),
  author: z.string().min(1, 'Имя автора обязательно'),
  preview: z.string().min(1, 'Текст прогноза обязателен'),
  timestamp: z.string().optional(),
});

type ForecastFormValues = z.infer<typeof forecastFormSchema>;

// Константы для полей
const PLACEHOLDERS = {
  SPORT: 'Например: Футбол',
  DATE: 'Например: 22.03.2026',
  TIME: 'Например: 19:00',
  HOME_TEAM: 'Например: Локомотив М',
  AWAY_TEAM: 'Например: Акрон Тольятти',
  AUTHOR: 'Например: Иван Беленцов',
  PREVIEW: 'Текст прогноза...',
  ODD_LABEL: 'Например: П1',
  ODD_VALUE: 'Например: 1.5',
};

const FIELD_LABELS = {
  SPORT: 'Вид спорта',
  DATE: 'Дата',
  TIME: 'Время',
  HOME_TEAM: 'Команда хозяев',
  AWAY_TEAM: 'Команда гостей',
  AUTHOR: 'Автор',
  PREVIEW: 'Текст прогноза',
  ODDS: 'Коэффициенты',
};

const DEFAULT_VALUES: ForecastFormValues = {
  id: 0,
  sport: '',
  date: '',
  time: '',
  homeTeam: '',
  awayTeam: '',
  odds: [{ label: '', value: '' }],
  author: '',
  preview: '',
  timestamp: '',
};

const AdminDashboardForecast: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const isEditMode = !!id;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ForecastFormValues>({
    resolver: zodResolver(forecastFormSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  // Следим за массивом коэффициентов
  const odds = watch('odds');

  // Загружаем данные для редактирования
  useEffect(() => {
    if (isEditMode && id) {
      const forecast = FORECASTS.find((item) => item.id === Number(id));
      if (forecast) {
        reset({
          id: forecast.id,
          sport: forecast.sport,
          date: forecast.date,
          time: forecast.time,
          homeTeam: forecast.homeTeam,
          awayTeam: forecast.awayTeam,
          odds: forecast.odds,
          author: forecast.author,
          preview: forecast.preview,
          timestamp: forecast.timestamp,
        });
      }
    }
  }, [isEditMode, id, reset]);

  const onSubmit = async (data: ForecastFormValues) => {
    console.log('Сохранение прогноза:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push('/admin/forecasts');
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить этот прогноз?')) {
      console.log('Удаление прогноза:', id);
      setTimeout(() => {
        router.push('/admin/forecasts');
      }, 1000);
    }
  };

  const handleCancel = () => {
    router.push('/admin/forecasts');
  };

  // Добавление коэффициента
  const addOdd = () => {
    const currentOdds = watch('odds') || [];
    setValue('odds', [...currentOdds, { label: '', value: '' }]);
  };

  // Удаление коэффициента
  const removeOdd = (index: number) => {
    const currentOdds = watch('odds') || [];
    if (currentOdds.length > 1) {
      setValue('odds', currentOdds.filter((_, i) => i !== index));
    }
  };

  if (!isEditMode) {
    return (
      <PageContainer>
        <LoadingWrapper>
          <Loader2 size={32} />
        </LoadingWrapper>
      </PageContainer>
    );
  }

  return (
    <>
      <Seo title={isEditMode ? 'Редактирование прогноза' : 'Создание прогноза'} noIndex={true} />
      <PageContainer>
        <Header>
          <HeaderLeft>
            <BackButton onClick={handleCancel} aria-label="Назад">
              <ChevronLeft />
            </BackButton>
            <Title>{isEditMode ? 'Редактирование прогноза' : 'Создание прогноза'}</Title>
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
            <FormField label={FIELD_LABELS.SPORT} required error={errors.sport?.message}>
              <Input
                placeholder={PLACEHOLDERS.SPORT}
                error={errors.sport?.message}
                {...register('sport')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.DATE} required error={errors.date?.message}>
              <Input
                placeholder={PLACEHOLDERS.DATE}
                error={errors.date?.message}
                {...register('date')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.TIME} required error={errors.time?.message}>
              <Input
                placeholder={PLACEHOLDERS.TIME}
                error={errors.time?.message}
                {...register('time')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.HOME_TEAM} required error={errors.homeTeam?.message}>
              <Input
                placeholder={PLACEHOLDERS.HOME_TEAM}
                error={errors.homeTeam?.message}
                {...register('homeTeam')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.AWAY_TEAM} required error={errors.awayTeam?.message}>
              <Input
                placeholder={PLACEHOLDERS.AWAY_TEAM}
                error={errors.awayTeam?.message}
                {...register('awayTeam')}
              />
            </FormField>

            {/* Коэффициенты */}
            <OddsSection>
              <OddsTitle>{FIELD_LABELS.ODDS}</OddsTitle>
              {errors.odds?.message && (
                <div style={{ color: '#F44336', fontSize: '12px', marginBottom: '8px' }}>
                  {errors.odds.message}
                </div>
              )}
              <OddsGrid>
                {odds?.map((_, index) => (
                  <OddsRow key={index}>
                    <OddsFieldGroup>
                      <FormField label="Название" error={errors.odds?.[index]?.label?.message}>
                        <Input
                          placeholder={PLACEHOLDERS.ODD_LABEL}
                          error={errors.odds?.[index]?.label?.message}
                          {...register(`odds.${index}.label`)}
                        />
                      </FormField>
                      <FormField label="Значение" error={errors.odds?.[index]?.value?.message}>
                        <Input
                          placeholder={PLACEHOLDERS.ODD_VALUE}
                          error={errors.odds?.[index]?.value?.message}
                          {...register(`odds.${index}.value`)}
                        />
                      </FormField>
                    </OddsFieldGroup>
                    {odds.length > 1 && (
                      <RemoveOddButton
                        type="button"
                        onClick={() => removeOdd(index)}
                        aria-label="Удалить коэффициент"
                      >
                        <X size={18} />
                      </RemoveOddButton>
                    )}
                  </OddsRow>
                ))}
              </OddsGrid>
              <AddOddButton type="button" onClick={addOdd}>
                <Plus size={18} />
                Добавить коэффициент
              </AddOddButton>
            </OddsSection>

            <FormField label={FIELD_LABELS.AUTHOR} required error={errors.author?.message}>
              <Input
                placeholder={PLACEHOLDERS.AUTHOR}
                error={errors.author?.message}
                {...register('author')}
              />
            </FormField>

            <FormField label={FIELD_LABELS.PREVIEW} required error={errors.preview?.message}>
              <Textarea
                placeholder={PLACEHOLDERS.PREVIEW}
                error={errors.preview?.message}
                rows={6}
                {...register('preview')}
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

AdminDashboardForecast.layout = "admin";

export default AdminDashboardForecast;