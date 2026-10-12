import styled from "styled-components";

import { Title, Paragraph, CustomLink } from "@/shared";

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

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[400]};
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Copyright = styled(Paragraph)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0;
`;

export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  text-decoration: none;
  transition: color 0.2s ease;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.orange.primary};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
  }
`;

export const ContactText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.orange.primary};
  }
`;

export const SectionWrapper = styled.footer`
  position: relative;
  width: 100%;
  background-image: url("/images/footer/footer-bg@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Disclaimer = styled(Paragraph)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Description = styled(Paragraph)`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0;
  max-width: 280px;
`;

export const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.gray[400]};
  background-color: ${({ theme }) => theme.colors.gray[800] ?? "rgba(255,255,255,0.05)"};
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  svg {
    flex-shrink: 0;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange.primary};
      background-color: ${({ theme }) => theme.colors.gray[700] ?? "rgba(255,255,255,0.1)"};
      transform: translateY(-2px);
    }
  }
`;
