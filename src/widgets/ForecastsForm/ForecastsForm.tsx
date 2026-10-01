import { useEffect, type FC } from "react";
import {
  ChevronLeft,
  Form,
  Loader2,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, Input, Textarea } from "@/shared";

import { FORECASTS } from "../forecasts/ForecastsList/ForecastsList.constants";

import type { ForecastFormValues } from "./ForecastsForm.types";

import {
  DEFAULT_VALUES,
  FIELD_LABELS,
  PLACEHOLDERS,
} from "./ForecastsForm.constants";

import { forecastFormSchema } from "./ForecastsForm.schema";

import {
  PageContainer,
  Actions,
  AddOddButton,
  BackButton,
  CancelButton,
  DeleteButton,
  FormActions,
  FormWrapper,
  Header,
  HeaderLeft,
  LoadingWrapper,
  OddsFieldGroup,
  OddsGrid,
  OddsRow,
  OddsSection,
  OddsTitle,
  RemoveOddButton,
  SaveButton,
  Title,
} from "./ForecastsForm.styled";
import { useRouter } from "next/router";

export const ForecastsForm: FC = () => {
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
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const odds = watch("odds");

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

  const onSubmit = async (/*data: ForecastFormValues*/) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/admin/forecasts");
  };

  const handleDelete = () => {
    if (window.confirm("Вы уверены, что хотите удалить этот прогноз?")) {
      setTimeout(() => {
        router.push("/admin/forecasts");
      }, 1000);
    }
  };

  const handleCancel = () => {
    router.push("/admin/forecasts");
  };

  const addOdd = () => {
    const currentOdds = watch("odds") || [];
    setValue("odds", [...currentOdds, { label: "", value: "" }]);
  };

  const removeOdd = (index: number) => {
    const currentOdds = watch("odds") || [];
    if (currentOdds.length > 1) {
      setValue(
        "odds",
        currentOdds.filter((_, i) => i !== index),
      );
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
    <PageContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={handleCancel} aria-label="Назад">
            <ChevronLeft />
          </BackButton>
          <Title>
            {isEditMode ? "Редактирование прогноза" : "Создание прогноза"}
          </Title>
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
          <FormField
            label={FIELD_LABELS.SPORT}
            required
            error={errors.sport?.message}
          >
            <Input
              placeholder={PLACEHOLDERS.SPORT}
              error={errors.sport?.message}
              {...register("sport")}
            />
          </FormField>

          <FormField
            label={FIELD_LABELS.DATE}
            required
            error={errors.date?.message}
          >
            <Input
              placeholder={PLACEHOLDERS.DATE}
              error={errors.date?.message}
              {...register("date")}
            />
          </FormField>

          <FormField
            label={FIELD_LABELS.TIME}
            required
            error={errors.time?.message}
          >
            <Input
              placeholder={PLACEHOLDERS.TIME}
              error={errors.time?.message}
              {...register("time")}
            />
          </FormField>

          <FormField
            label={FIELD_LABELS.HOME_TEAM}
            required
            error={errors.homeTeam?.message}
          >
            <Input
              placeholder={PLACEHOLDERS.HOME_TEAM}
              error={errors.homeTeam?.message}
              {...register("homeTeam")}
            />
          </FormField>

          <FormField
            label={FIELD_LABELS.AWAY_TEAM}
            required
            error={errors.awayTeam?.message}
          >
            <Input
              placeholder={PLACEHOLDERS.AWAY_TEAM}
              error={errors.awayTeam?.message}
              {...register("awayTeam")}
            />
          </FormField>

          <OddsSection>
            <OddsTitle>{FIELD_LABELS.ODDS}</OddsTitle>
            {errors.odds?.message && (
              <div
                style={{
                  color: "#F44336",
                  fontSize: "12px",
                  marginBottom: "8px",
                }}
              >
                {errors.odds.message}
              </div>
            )}
            <OddsGrid>
              {odds?.map((_, index) => (
                <OddsRow key={index}>
                  <OddsFieldGroup>
                    <FormField
                      label="Название"
                      error={errors.odds?.[index]?.label?.message}
                    >
                      <Input
                        placeholder={PLACEHOLDERS.ODD_LABEL}
                        error={errors.odds?.[index]?.label?.message}
                        {...register(`odds.${index}.label`)}
                      />
                    </FormField>
                    <FormField
                      label="Значение"
                      error={errors.odds?.[index]?.value?.message}
                    >
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

          <FormField
            label={FIELD_LABELS.AUTHOR}
            required
            error={errors.author?.message}
          >
            <Input
              placeholder={PLACEHOLDERS.AUTHOR}
              error={errors.author?.message}
              {...register("author")}
            />
          </FormField>

          <FormField
            label={FIELD_LABELS.PREVIEW}
            required
            error={errors.preview?.message}
          >
            <Textarea
              placeholder={PLACEHOLDERS.PREVIEW}
              error={errors.preview?.message}
              rows={6}
              {...register("preview")}
            />
          </FormField>

          <FormActions>
            <CancelButton
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Отмена
            </CancelButton>
            <SaveButton
              type="submit"
              $isLoading={isSubmitting}
              disabled={isSubmitting}
            >
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
