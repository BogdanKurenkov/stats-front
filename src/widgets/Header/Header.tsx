import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { MENU_ITEMS } from './Header.constants';
import {
  HeaderContainer,
  HeaderContent,
  LogoWrapper,
  NavMenu,
  NavLink,
  RightSection,
  AuthButton,
  Avatar,
  MobileMenuButton,
  MobileMenu,
  MobileCloseButton,
  MobileNavLink,
  Overlay,
} from './Header.styled';

const isAuthenticated = false;
const userInitials = 'JD';

export const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuth = () => {
    if (isAuthenticated) {
      console.log('Logout');
    } else {
      router.push(ROUTES.LOGIN);
    }
  };

  const handleAvatarClick = () => {
    router.push('/profile');
  };

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
            {isAuthenticated ? (
              <Avatar onClick={handleAvatarClick} aria-label="Профиль пользователя">
                {userInitials}
              </Avatar>
            ) : (
              <AuthButton
                variant="primary"
                size="medium"
                onClick={handleAuth}
              >
                Войти
              </AuthButton>
            )}

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
        $isOpen={isMobileMenuOpen}
        onClick={closeMobileMenu}
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

        {!isAuthenticated && (
          <AuthButton
            variant="primary"
            size="medium"
            onClick={() => {
              handleAuth();
              closeMobileMenu();
            }}
          >
            Войти
          </AuthButton>
        )}
      </MobileMenu>
    </>
  );
};