import z from "zod";

import { forecastFormSchema } from "./ForecastsForm.schema";

export type ForecastFormValues = z.infer<typeof forecastFormSchema>;
