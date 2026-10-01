import type { FC } from "react";

import { useDictionary } from "@/shared/lib/localization";

import { LegalDocument, type LegalDocumentData } from "../LegalDocument";

export const CookiePolicy: FC = () => {
  const { cookiePolicy } = useDictionary();

  return (
    <LegalDocument document={cookiePolicy as unknown as LegalDocumentData} />
  );
};
