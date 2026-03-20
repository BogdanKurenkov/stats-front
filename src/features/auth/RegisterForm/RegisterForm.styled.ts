import styled from "styled-components";
import { Title } from "@/shared/ui";

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export const StyledFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[700]};
    box-shadow: 0 12px 48px rgba(249, 115, 22, 0.15);
  }
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-bottom: 32px;
  text-align: center;
`;
