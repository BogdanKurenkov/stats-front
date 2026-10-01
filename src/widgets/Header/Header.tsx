import { type FC, useState } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

import { LanguageSwitcher } from "@/features/languageSwitcher";

import { ROUTES } from "@/shared/config";
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
  Logo,
  ToggleTheme,
} from "@/shared";

import { MENU_ITEMS } from "./Header.constants";

// TODO убрать моковые данные и привязаться к реальному юзеру
const isAuthenticated = false;
const userInitials = "JD";

export const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuth = () => {
    if (isAuthenticated) {
    } else {
      router.push(ROUTES.LOGIN);
    }
  };

  const handleAvatarClick = () => {
    router.push("/profile");
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
            <ToggleTheme />

            {isAuthenticated ? (
              <Avatar
                onClick={handleAvatarClick}
                aria-label="Профиль пользователя"
              >
                {userInitials}
              </Avatar>
            ) : (
              <AuthButton variant="primary" size="medium" onClick={handleAuth}>
                Войти
              </AuthButton>
            )}

            <LanguageSwitcher />

            <MobileMenuButton
              onClick={openMobileMenu}
              aria-label="Открыть меню"
            >
              <Menu size={24} />
            </MobileMenuButton>
          </RightSection>
        </HeaderContent>
      </HeaderContainer>

      <Overlay isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileCloseButton onClick={closeMobileMenu} aria-label="Закрыть меню">
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
