import { Select } from "@/shared";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  & button {
    width: 73px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 12px;
      height: 31px;
      width: 70px;
    }
  }
`;
