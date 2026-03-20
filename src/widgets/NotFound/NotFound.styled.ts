import styled from "styled-components";
import { Button, Paragraph, Title } from "@/shared/ui";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 40px 0;
`;

export const ErrorImage = styled.div`
  font-size: 80px;
  margin-bottom: 20px;
  opacity: 0.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 60px;
  }
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange.primary};
  margin: 0;
  line-height: 1;
  text-shadow: 0 0 20px ${({ theme }) => theme.colors.orange.primary}40;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 80px;
  }
`;

export const ErrorTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.gray[100]};
  margin: 16px 0 8px;
`;

export const ErrorDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 32px;
  max-width: 500px;
`;

export const HomeButton = styled(Button)`
  min-width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
