import { useEffect, type FC } from 'react';
import { ChevronLeft, Loader2, Save, Trash2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormField, Input, Textarea } from '@/shared';

import { PartnerFormValues } from './PartnersForm.types';

import { partnerFormSchema } from './PartnersForm.schema';

import { BONUSES_DATA } from '../bonuses/BonusesList/BonusesList.constants';

import { DEFAULT_VALUES, FIELD_LABELS, PLACEHOLDERS } from './PartnersForm.constants';

import {
  PageContainer,
  Actions,
  BackButton,
  CancelButton,
  DeleteButton,
  FormActions,
  FormWrapper,
  Header,
  HeaderLeft,
  SaveButton,
  Title
} from './PartnersForm.styles';

export const PartnersForm: FC = () => {
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
  );
};