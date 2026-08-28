import { PartnerFormValues } from "./PartnersForm.types";

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

export const DEFAULT_VALUES: PartnerFormValues = {
  id: "",
  title: "",
  amount: "",
  subtitle: "",
  bonusAmount: "",
  minOdds: "",
  wagering: "",
  buttonText: "",
  terms: "",
};
