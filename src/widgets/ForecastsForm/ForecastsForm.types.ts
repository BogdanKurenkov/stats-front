import type z from "zod";

import type { forecastFormSchema } from "./ForecastsForm.schema";

export type ForecastFormValues = z.infer<typeof forecastFormSchema>;
