import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title } from '@/shared/ui';

import { FEATURED_MATCHES } from './FeaturedMatches.constants';

import {
  SectionWrapper,
  SwiperContainer,
  MatchCard,
  TeamsWrapper,
  TeamRow,
  TeamName,
  TeamScore,
  VsBadge,
  MatchInfo,
  MatchTime,
  MatchDate,
  Tournament,
} from './FeaturedMatches.styled';

import 'swiper/css';
import 'swiper/css/navigation';

export const FeaturedMatches: FC = () => {
  const dict = useDictionary();
  const data = dict.featuredMatches;

  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            {data.title}
          </Title>

          <SwiperContainer>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
            >
              {FEATURED_MATCHES.map((match) => (
                <SwiperSlide key={match.id}>
                  <MatchCard>
                    <TeamsWrapper>
                      <TeamRow>
                        <TeamName>{match.homeTeam}</TeamName>
                        <TeamScore>0</TeamScore>
                      </TeamRow>
                      <TeamRow>
                        <TeamName>{match.awayTeam}</TeamName>
                        <TeamScore>0</TeamScore>
                      </TeamRow>
                    </TeamsWrapper>

                    <VsBadge>VS</VsBadge>

                    <MatchInfo>
                      <MatchTime>{match.time}</MatchTime>
                      <MatchDate size="sm">{match.date}</MatchDate>
                    </MatchInfo>

                    <Tournament size="sm">{match.tournament}</Tournament>
                  </MatchCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        </SectionWrapper>
      </Container>
    </Section>
  );
};