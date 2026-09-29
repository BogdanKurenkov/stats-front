import { useLanguage } from '../../model';

import { LANGUAGES, type Locale, } from '@/shared/lib/localization';

import { StyledSelect } from './LanguageSwitcher.styled';

export const LanguageSwitcher = () => {
  const { currentLocale, switchLanguage } = useLanguage();

  return (
    <StyledSelect
      value={currentLocale}
      onValueChange={(value) => switchLanguage(value as Locale)}
      options={LANGUAGES}
      placeholder=""
      renderValue={(value) => value.toUpperCase()}
      aria-label="Выбор языка"
    />
  );
};