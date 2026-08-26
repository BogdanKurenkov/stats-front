import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

import { Logo } from '@/shared/ui';
import { ToggleTheme } from '@/shared/ui';
import {
  HeaderContainer,
  HeaderContent,
  LogoWrapper,
  NavMenu,
  NavLink,
  RightSection,
  MobileMenuButton,
  MobileMenu,
  MobileCloseButton,
  MobileNavLink,
  Overlay,
} from '@/shared';

import { MENU_ITEMS } from './AdminHeader.constants';

export const AdminHeader: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LogoWrapper>
            <Logo variant="default" />
          </LogoWrapper>

          <NavMenu>
            {MENU_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                $active={router.pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </NavMenu>

          <RightSection>

            <ToggleTheme />

            <MobileMenuButton
              onClick={openMobileMenu}
              aria-label="Открыть меню"
            >
              <Menu size={24} />
            </MobileMenuButton>
          </RightSection>
        </HeaderContent>
      </HeaderContainer>

      <Overlay
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileCloseButton
          onClick={closeMobileMenu}
          aria-label="Закрыть меню"
        >
          <X size={24} />
        </MobileCloseButton>

        {MENU_ITEMS.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            $active={router.pathname === item.href}
            onClick={closeMobileMenu}
          >
            {item.label}
          </MobileNavLink>
        ))}

      </MobileMenu>
    </>
  );
};