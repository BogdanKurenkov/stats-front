import styled from "styled-components";
import { Title, Paragraph, CustomLink } from "@/shared/ui";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.black.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
  margin-top: auto;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 24px 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 40px 20px 32px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled(Title)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-bottom: 0;
`;

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const FooterLink = styled(CustomLink)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange.primary};
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
  padding: 24px;
  text-align: center;
`;

export const Copyright = styled(Paragraph)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;
