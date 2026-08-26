import { type FC, Children, cloneElement, isValidElement } from 'react';

import type { RadioProps } from '../Radio/Radio.types';

import type { RadioGroupProps } from './RadioGroup.types';

import { GroupContainer, GroupError } from './RadioGroup.styled';

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  children,
  error,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <GroupContainer className={className}>
      {Children.map(children, (child) => {
        if (isValidElement<RadioProps>(child) && child.type) {
          return cloneElement<RadioProps>(child, {
            name,
            checked: value !== undefined ? child.props.value === value : undefined,
            defaultChecked: defaultValue !== undefined ? child.props.value === defaultValue : undefined,
            onChange: handleChange,
          });
        }
        return child;
      })}
      {error && <GroupError role="alert">{error}</GroupError>}
    </GroupContainer>
  );
};