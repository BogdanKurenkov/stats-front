import { FC, useState, useMemo } from 'react';

import { useDictionary } from '@/shared/lib/localization';
import { Container, Section, Select } from '@/shared/ui';

import { LEAGUE_OPTIONS } from './MatchesList.constants';

import { MatchesListProps } from './MatchesList.types';

import {
  MatchesWrapper,
  HeaderRow,
  MatchesTitle,
  SelectWrapper,
  MatchesGrid,
  MatchCard,
  MatchTeams,
  Team,
  TeamName,
  TeamScore,
  Vs,
  MatchInfo,
  MatchDateTime,
  Tournament,
  EmptyState,
} from './MatchesList.styled';

const getVariantTitle = (
  variant: string | undefined,
  upcomingTitle: string,
  pastTitle: string,
  defaultTitle: string
): string => {
  switch (variant) {
    case 'upcoming':
      return upcomingTitle;
    case 'past':
      return pastTitle;
    default:
      return defaultTitle;
  }
};

export const MatchesList: FC<MatchesListProps> = ({
  matches,
  title,
  variant,
  className,
}) => {
  const dict = useDictionary();
  const matchesData = dict.matchesList;
  const [selectedLeague, setSelectedLeague] = useState('all');

  const displayTitle = title || getVariantTitle(
    variant,
    matchesData.upcomingTitle,
    matchesData.pastTitle,
    matchesData.defaultTitle
  );

  const filteredByVariant = variant
    ? matches.filter((match) => match.status === variant)
    : matches;

  const filteredMatches = useMemo(() => {
    if (selectedLeague === 'all') return filteredByVariant;
    return filteredByVariant.filter((match) => match.leagueId === selectedLeague);
  }, [filteredByVariant, selectedLeague]);

  const isEmpty = filteredMatches.length === 0;

  return (
    <Section pt pb>
      <Container>
        <MatchesWrapper className={className}>
          <HeaderRow>
            <MatchesTitle as="h2" level="h2">
              {displayTitle}
            </MatchesTitle>
            <SelectWrapper>
              <Select
                options={LEAGUE_OPTIONS}
                value={selectedLeague}
                onValueChange={setSelectedLeague}
                aria-label={matchesData.selectAriaLabel}
              />
            </SelectWrapper>
          </HeaderRow>

          {isEmpty ? (
            <EmptyState>{matchesData.emptyState}</EmptyState>
          ) : (
            <MatchesGrid>
              {filteredMatches.map((match) => (
                <MatchCard key={match.id}>
                  <MatchTeams>
                    <Team>
                      <TeamName>{match.homeTeam}</TeamName>
                      {match.homeScore !== undefined && (
                        <TeamScore>{match.homeScore}</TeamScore>
                      )}
                    </Team>
                    <Vs>VS</Vs>
                    <Team>
                      <TeamName>{match.awayTeam}</TeamName>
                      {match.awayScore !== undefined && (
                        <TeamScore>{match.awayScore}</TeamScore>
                      )}
                    </Team>
                  </MatchTeams>
                  <MatchInfo>
                    <MatchDateTime>
                      <span>{match.date}</span>
                      <span>{match.time}</span>
                    </MatchDateTime>
                    <Tournament>{match.tournament}</Tournament>
                  </MatchInfo>
                </MatchCard>
              ))}
            </MatchesGrid>
          )}
        </MatchesWrapper>
      </Container>
    </Section>
  );
};