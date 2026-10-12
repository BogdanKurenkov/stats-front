import type { FC } from "react";

import { Container, Logo } from "@/shared";

import { FOOTER_CONTACTS, FOOTER_SECTIONS } from "./Footer.constants";

import {
  ContactItem,
  ContactLink,
  ContactsList,
  ContactText,
  Copyright,
  Description,
  Disclaimer,
  FooterBottom,
  FooterContent,
  FooterLink,
  FooterSection,
  LinkItem,
  LinksList,
  LogoWrapper,
  SectionTitle,
  SectionWrapper,
  SocialIconLink,
  SocialList,
} from "./Footer.styled";

import { Instagram, Send, Youtube } from "lucide-react";

const VkIcon: FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974H.831c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.332 2.708z" />
  </svg>
);

const TiktokIcon: FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "ВКонтакте", href: "https://vk.com", icon: VkIcon },
  { label: "Telegram", href: "https://t.me", icon: Send },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com", icon: TiktokIcon },
];

const currentYear = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <SectionWrapper>
      <FooterContent>
        <FooterSection>
          <LogoWrapper>
            <Logo variant="large" />
            <Description>
              Профессиональная аналитика спортивных событий, точные прогнозы и
              актуальная статистика для универсальных решений.
            </Description>
          </LogoWrapper>
          <SocialList>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <SocialIconLink
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </SocialIconLink>
                </li>
              );
            })}
          </SocialList>
        </FooterSection>

        {FOOTER_SECTIONS.map((section) => (
          <FooterSection key={section.title}>
            <SectionTitle as="h3" level="h3">
              {section.title}
            </SectionTitle>
            <LinksList>
              {section.links.map((link) => (
                <LinkItem key={link.href}>
                  <FooterLink href={link.href} variant="default">
                    {link.label}
                  </FooterLink>
                </LinkItem>
              ))}
            </LinksList>
          </FooterSection>
        ))}

        <FooterSection>
          <SectionTitle as="h3" level="h3">
            Контакты
          </SectionTitle>
          <ContactsList>
            {FOOTER_CONTACTS.map((contact) => {
              const Icon = contact.icon;
              return (
                <ContactItem key={contact.label}>
                  {contact.href ? (
                    <ContactLink
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <Icon size={16} />
                      {contact.label}
                    </ContactLink>
                  ) : (
                    <ContactText>
                      <Icon size={16} />
                      {contact.label}
                    </ContactText>
                  )}
                </ContactItem>
              );
            })}
          </ContactsList>
        </FooterSection>
      </FooterContent>

      <Container>
        <FooterBottom>
          <Copyright size="sm">
            © {currentYear} Football Stats. Все права защищены.
          </Copyright>
          <Disclaimer size="sm">
            18+ · Играйте ответственно · Только для совершеннолетних
          </Disclaimer>
        </FooterBottom>
      </Container>
    </SectionWrapper>
  );
};
