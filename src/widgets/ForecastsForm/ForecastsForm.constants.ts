import type { ForecastFormValues } from "./ForecastsForm.types";

export const PLACEHOLDERS = {
  SPORT: "Например: Футбол",
  DATE: "Например: 22.03.2026",
  TIME: "Например: 19:00",
  HOME_TEAM: "Например: Локомотив М",
  AWAY_TEAM: "Например: Акрон Тольятти",
  AUTHOR: "Например: Иван Беленцов",
  PREVIEW: "Текст прогноза...",
  ODD_LABEL: "Например: П1",
  ODD_VALUE: "Например: 1.5",
};

export const FIELD_LABELS = {
  SPORT: "Вид спорта",
  DATE: "Дата",
  TIME: "Время",
  HOME_TEAM: "Команда хозяев",
  AWAY_TEAM: "Команда гостей",
  AUTHOR: "Автор",
  PREVIEW: "Текст прогноза",
  ODDS: "Коэффициенты",
};

export const DEFAULT_VALUES: ForecastFormValues = {
  id: 0,
  sport: "",
  date: "",
  time: "",
  homeTeam: "",
  awayTeam: "",
  odds: [{ label: "", value: "" }],
  author: "",
  preview: "",
  timestamp: "",
};
