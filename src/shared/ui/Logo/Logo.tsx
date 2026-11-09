import type { FC } from "react";

import { ROUTES } from "@/shared/config";

import type { LogoProps } from "./Logo.types";

import { LogoLink, LogoIcon } from "./Logo.styled";

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <LogoLink
      href={ROUTES.HOME}
      className={className}
      aria-label="На главную"
      aria-current="home"
    >
      <LogoIcon
        width={132}
        height={41}
        alt="Логотип"
        src="/images/logo/logo.png"
      />
    </LogoLink>
  );
};
