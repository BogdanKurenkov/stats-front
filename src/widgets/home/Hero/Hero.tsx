import type { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const HeroMatchCard = dynamic(
  () => import("@/features/heroMatchCard").then((mod) => mod.HeroMatchCard),
  { ssr: false },
);

import { useDictionary, scrollToSection } from "@/shared/lib";
import { ROUTES } from "@/shared/config";
import { Button, Container } from "@/shared/ui";

import {
  Accent,
  ActionsRow,
  HeroDescription,
  HeroLeft,
  HeroSection,
  HeroTitle,
  HeroTop,
} from "./Hero.styled";

export const Hero: FC = () => {
  const dict = useDictionary();
  const hero = dict.hero;

  const { push } = useRouter();

  return (
    <HeroSection pt pb id={"main-hero"}>
      <Container>
        <HeroTop>
          <HeroLeft>
            <HeroTitle>
              Спортивные прогнозы <br />с аргументами <br />и{" "}
              <Accent>реальными данными</Accent>
            </HeroTitle>

            <HeroDescription size="lg">{hero.description}</HeroDescription>

            <ActionsRow>
              <Button
                variant="primary"
                size="large"
                onClick={() => push(ROUTES.FORECASTS)}
              >
                {hero.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() => scrollToSection("creation-steps")}
              >
                {hero.secondaryCta}
              </Button>
            </ActionsRow>
          </HeroLeft>

          <HeroMatchCard />
        </HeroTop>
      </Container>
    </HeroSection>
  );
};
