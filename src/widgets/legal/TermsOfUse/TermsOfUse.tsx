import { FC } from 'react';

import { useDictionary } from '@/shared/lib/localization';

import { LegalDocument, LegalDocumentData } from '../LegalDocument';

export const TermsOfUse: FC = () => {
  const { termsOfUse } = useDictionary();

  return <LegalDocument document={termsOfUse as unknown as LegalDocumentData} />;
};
