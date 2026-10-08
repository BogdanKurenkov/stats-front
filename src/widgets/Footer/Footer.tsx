import type { FC } from "react";

import { Logo } from "@/shared";

import { FOOTER_CONTACTS, FOOTER_SECTIONS } from "./Footer.constants";

import {
  ContactItem,
  ContactLink,
  ContactsList,
  ContactText,
  Copyright,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterSection,
  LinkItem,
  LinksList,
  SectionTitle,
} from "./Footer.styled";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo variant="large" />
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

      <FooterBottom>
        <Copyright size="sm">
          © {currentYear} Football Stats. Все права защищены.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};
