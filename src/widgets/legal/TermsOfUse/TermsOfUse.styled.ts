import styled from "styled-components";
import { Title, Paragraph } from "@/shared/ui";

export const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
`;

export const LastUpdate = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 14px;
  margin-top: -16px;
`;

export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Subtitle = styled(Title)`
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0 0 0;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 24px;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.6;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;
