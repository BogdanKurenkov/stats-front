import { type FC, useState } from 'react';
import { Star } from 'lucide-react';

import { RatingInputProps } from './RatingInput.types';

import {
  RatingWrapper,
  StarButton,
} from './RatingInput.styled';


export const RatingInput: FC<RatingInputProps> = ({
  value,
  onChange,
  error,
}) => {
  const [hovered, setHovered] = useState(0);
  const displayValue = hovered || value;

  return (
    <RatingWrapper role="radiogroup" aria-label="Оценка">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarButton
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} из 5`}
          $filled={star <= displayValue}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
        >
          <Star
            size={28}
            fill={star <= displayValue ? 'currentColor' : 'none'}
          />
        </StarButton>
      ))}
    </RatingWrapper>
  );
};