import { LANGUAGES, useLanguage } from '../../model';
import { Locale } from '../../model/constants';

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
    />
  );
};