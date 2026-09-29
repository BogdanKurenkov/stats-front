import type z from "zod";

import type { partnerFormSchema } from "./PartnersForm.schema";

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

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;
