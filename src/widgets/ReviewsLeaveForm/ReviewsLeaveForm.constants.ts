export const REVIEW_FORM_ID = "review-form";

export const BOOKMAKER_OPTIONS = [
  { value: "winline", label: "Winline" },
  { value: "fonbet", label: "Фонбет" },
  { value: "1xstavka", label: "1xStavka" },
  { value: "liga-stavok", label: "Лига Ставок" },
  { value: "leon", label: "Леон" },
  { value: "other", label: "Другая БК" },
] as const;

export const DEFAULT_VALUES = {
  name: "",
  bookmaker: "",
  rating: 0,
  text: "",
  otherBookmaker: "",
};
