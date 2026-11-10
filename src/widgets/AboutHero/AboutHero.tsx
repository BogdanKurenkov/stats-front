import type { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useDictionary } from "@/shared/lib/localization";
import { Container, ROUTES } from "@/shared";

import {
  HeroWrapper,
  BackgroundLayer,
  ContainerInner,
  Breadcrumb,
  Kicker,
  HeroTitle,
  HeroDescription,
  Actions,
  PrimaryButton,
  SecondaryButton,
} from "./AboutHero.styled";

export const AboutHero: FC = () => {
  const dict = useDictionary();
  const hero = dict.about.hero;

  return (
    <HeroWrapper>
      <BackgroundLayer />
      <Container>
        <ContainerInner>
          <Breadcrumb>
            <Link href={ROUTES.HOME}>Главная</Link>
            <span>/</span>
            <span>О нас</span>
          </Breadcrumb>

          <Kicker>{hero.kicker}</Kicker>

          <HeroTitle as="h1" level="h1">
            {hero.title}
          </HeroTitle>

          <HeroDescription
            size="lg"
            dangerouslySetInnerHTML={{ __html: hero.description }}
          />

          <Actions>
            <PrimaryButton href={hero.primaryAction.href}>
              {hero.primaryAction.label}
              <ArrowRight size={16} />
            </PrimaryButton>

            <SecondaryButton href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
              <ArrowRight size={16} />
            </SecondaryButton>
          </Actions>
        </ContainerInner>
      </Container>
    </HeroWrapper>
  );
};
