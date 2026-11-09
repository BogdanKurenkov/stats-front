import type { FC } from "react";
import Image from "next/image";

import { useDictionary } from "@/shared/lib/localization";
import { Section } from "@/shared/ui";

import { BOOKMAKERS, SECTION_ID } from "./BestOdds.constants";

import {
  BestOddsHeader,
  BestOddsTitle,
  BestOddsSubtitle,
  BookmakerCard,
  BookmakerLogo,
  BookmakerCards,
  BookmakersContainer,
} from "./BestOdds.styled";

export const BestOdds: FC = () => {
  const dict = useDictionary();
  const section = dict.bestOdds;

  return (
    <Section id={SECTION_ID}>
      <BookmakersContainer>
        <BestOddsHeader>
          <BestOddsTitle>{section.title}</BestOddsTitle>
          <BestOddsSubtitle>{section.subtitle}</BestOddsSubtitle>
        </BestOddsHeader>
        <BookmakerCards>
          {BOOKMAKERS.map(({ height, name, src, width, href }) => (
            <BookmakerCard key={name} href={href}>
              <BookmakerLogo>
                <Image src={src} alt={name} width={width} height={height} />
              </BookmakerLogo>
            </BookmakerCard>
          ))}
        </BookmakerCards>
      </BookmakersContainer>
    </Section>
  );
};
