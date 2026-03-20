import { FC } from 'react';
import { Logo } from '@/shared/ui';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SectionTitle,
  LinksList,
  LinkItem,
  FooterLink,
  FooterBottom,
  Copyright,
} from './Footer.styled';
import { FOOTER_SECTIONS } from './Footer.constants';

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
      </FooterContent>

      <FooterBottom>
        <Copyright size="sm">
          © {currentYear} Footbal Stats. Все права защищены.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};