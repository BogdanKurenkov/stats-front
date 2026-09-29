import type { FC } from "react";

import { useDictionary } from "@/shared/lib/localization";

import { LegalDocument, type LegalDocumentData } from "../LegalDocument";

export const PrivacyPolicy: FC = () => {
  const { privacyPolicy } = useDictionary();

  return (
    <LegalDocument document={privacyPolicy as unknown as LegalDocumentData} />
  );
};
