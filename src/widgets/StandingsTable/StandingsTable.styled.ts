import styled from "styled-components";

import { Title } from "@/shared/ui";

export const StandingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StandingsTitle = styled(Title)`
  margin-bottom: 0;
`;

export const SelectWrapper = styled.div`
  min-width: 250px;
`;
