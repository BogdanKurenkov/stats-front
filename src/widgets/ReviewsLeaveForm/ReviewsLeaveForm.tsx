import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useDictionary } from '@/shared/lib/localization';
import {
  Container,
  Section,
  Title,
  Paragraph,
  FormField,
  Input,
  Textarea,
  Select,
  Button,
} from '@/shared/ui';

import { RatingInput } from './RatingInput';

import {
  REVIEW_FORM_ID,
  BOOKMAKER_OPTIONS,
  DEFAULT_VALUES,
} from './ReviewsLeaveForm.constants';

import { reviewFormSchema } from './ReviewsLeaveForm.schema';

import type { ReviewFormValues } from './ReviewsLeaveForm.types';

import {
  FormWrapper,
  FormHeader,
  FormContainer,
  StyledReviewForm,
  Disclaimer,
} from './ReviewsLeaveForm.styled';

export const ReviewsLeaveForm: FC = () => {
  const dict = useDictionary();
  const {
    title,
    description,
    nameLabel,
    namePlaceholder,
    bookmakerLabel,
    bookmakerPlaceholder,
    otherBookmakerLabel,
    otherBookmakerPlaceholder,
    ratingLabel,
    textLabel,
    textPlaceholder,
    submitButton,
    disclaimer,
  } = dict.reviewsLeaveForm;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onBlur',
  });

  const bookmakerValue = watch('bookmaker');
  const showOtherBookmaker = bookmakerValue === 'other';

  const onSubmit = (data: ReviewFormValues) => {
    console.log('Review form submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <Section pt pb>
      <Container>
        <FormWrapper id={REVIEW_FORM_ID}>
          <FormHeader>
            <Title as="h2" level="h2">
              {title}
            </Title>
            <Paragraph size="lg">{description}</Paragraph>
          </FormHeader>

          <FormContainer>
            {isSubmitted ? (
              <Paragraph size="lg">
                Спасибо! Ваш отзыв отправлен на модерацию.
              </Paragraph>
            ) : (
              <StyledReviewForm onSubmit={handleSubmit(onSubmit)}>
                <FormField label={nameLabel} error={errors.name?.message} required>
                  <Input
                    {...register('name')}
                    placeholder={namePlaceholder}
                  />
                </FormField>

                <FormField
                  label={bookmakerLabel}
                  error={errors.bookmaker?.message}
                  required
                >
                  <Controller
                    name="bookmaker"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        options={BOOKMAKER_OPTIONS}
                        placeholder={bookmakerPlaceholder}
                      />
                    )}
                  />
                </FormField>

                {showOtherBookmaker && (
                  <FormField
                    label={otherBookmakerLabel}
                    error={errors.otherBookmaker?.message}
                    required
                  >
                    <Input
                      {...register('otherBookmaker')}
                      placeholder={otherBookmakerPlaceholder}
                    />
                  </FormField>
                )}

                <FormField
                  label={ratingLabel}
                  error={errors.rating?.message}
                  required
                >
                  <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                      <RatingInput
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </FormField>

                <FormField
                  label={textLabel}
                  error={errors.text?.message}
                  required
                >
                  <Textarea
                    {...register('text')}
                    placeholder={textPlaceholder}
                    rows={6}
                  />
                </FormField>

                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {submitButton}
                </Button>

                <Disclaimer>{disclaimer}</Disclaimer>
              </StyledReviewForm>
            )}
          </FormContainer>
        </FormWrapper>
      </Container>
    </Section>
  );
};