import type { FC } from "react";
import Image from "next/image";

import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared/ui";

import {
  BOOKMAKER_LOGOS,
  SECTION_ID,
  type BookmakerId,
} from "./BestOdds.constants";

import {
  BestOddsSection,
  BestOddsHeader,
  BestOddsTitle,
  BestOddsSubtitle,
  BestOddsGrid,
  BookmakerCard,
  BookmakerLogo,
  BookmakerOddsRow,
  TrophyIcon,
  BookmakerOdds,
} from "./BestOdds.styled";

export const BestOdds: FC = () => {
  const dict = useDictionary();
  const section = dict.bestOdds;

  return (
    <BestOddsSection id={SECTION_ID}>
      <Container>
        <BestOddsHeader>
          <BestOddsTitle>{section.title}</BestOddsTitle>
          <BestOddsSubtitle>{section.subtitle}</BestOddsSubtitle>
        </BestOddsHeader>

        <BestOddsGrid>
          {section.items.map((item) => {
            const logo = BOOKMAKER_LOGOS[item.id as BookmakerId];
            return (
              <BookmakerCard key={item.id}>
                <BookmakerLogo>
                  <Image
                    src={logo.src}
                    alt={item.name}
                    width={logo.width}
                    height={logo.height}
                  />
                </BookmakerLogo>

                <BookmakerOddsRow>
                  <TrophyIcon size={16} />
                  <BookmakerOdds>{item.odds}</BookmakerOdds>
                </BookmakerOddsRow>
              </BookmakerCard>
            );
          })}
        </BestOddsGrid>
      </Container>
    </BestOddsSection>
  );
};
