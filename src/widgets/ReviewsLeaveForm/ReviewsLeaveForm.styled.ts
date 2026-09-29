import styled from "styled-components";

import { Form } from "@/shared/ui";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  scroll-margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 820px;
`;

export const FormContainer = styled.div`
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  width: 100%;
  max-width: 720px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const StyledReviewForm = styled(Form)`
  && {
    max-width: 100%;
    margin: 0;
  }
`;

export const Disclaimer = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
`;
