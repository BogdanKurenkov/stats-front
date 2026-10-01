import styled from "styled-components";

export const RatingWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 0;
`;

export const StarButton = styled.button<{ $filled: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme, $filled }) =>
    $filled ? theme.colors.orange.primary : theme.colors.gray[600]};
  transition:
    color 0.15s ease,
    transform 0.15s ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;
