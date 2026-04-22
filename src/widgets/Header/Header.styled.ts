import styled from "styled-components";

import { Button, CustomLink } from "@/shared/ui";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  max-width: 1440px;
  margin: 0 auto;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 12px 16px;
    gap: 16px;
  }
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled(CustomLink)<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.orange.primary : theme.colors.gray[100]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange.primary};
    text-decoration: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

export const AuthButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange.primary} 0%,
    ${({ theme }) => theme.colors.orange.dark} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  color: ${({ theme }) => theme.colors.black.primary};
  font-weight: 600;
  font-size: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  padding: 8px;
  z-index: 101;

  &:hover {
    color: ${({ theme }) => theme.colors.orange.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 80px 24px 24px;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const MobileNavLink = styled(CustomLink)<{ $active?: boolean }>`
  font-size: 18px;
  font-weight: 500;
  padding: 12px 0;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.orange.primary : theme.colors.gray[100]};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};

  &:hover {
    color: ${({ theme }) => theme.colors.orange.primary};
    text-decoration: none;
  }
`;

export const MobileCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 24px;
  cursor: pointer;
  padding: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange.primary};
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;
