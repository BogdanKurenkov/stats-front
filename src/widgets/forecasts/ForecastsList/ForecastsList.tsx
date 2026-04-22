import { FC, useState } from 'react';

import { Container, Section, Title } from '@/shared/ui';

import { FORECASTS } from './ForecastsList.constants';

import {
  ForecastsGrid,
  ForecastCard,
  SportBadge,
  MatchDateTime,
  MatchTeams,
  Team,
  TeamName,
  Vs,
  OddsWrapper,
  OddItem,
  OddLabel,
  OddValue,
  Preview,
  ExpandButton,
  AuthorRow,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorTime,
} from './ForecastsList.styled';

export const ForecastsList: FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isExpanded = (id: number) => expandedIds.has(id);

  const getPreviewText = (preview: string, id: number) => {
    if (isExpanded(id)) return preview;
    if (preview.length > 100) return preview.slice(0, 100) + '...';
    return preview;
  };

  return (
    <Section pt pb>
      <Container>
        <Title as="h2" level="h2" style={{ marginBottom: '32px' }}>
          Прогнозы на спорт
        </Title>

        <ForecastsGrid>
          {FORECASTS.map((forecast) => (
            <ForecastCard key={forecast.id}>
              <SportBadge>{forecast.sport}</SportBadge>

              <MatchDateTime>
                <span>{forecast.date}</span>
                <span>{forecast.time}</span>
              </MatchDateTime>

              <MatchTeams>
                <Team>
                  <TeamName>{forecast.homeTeam}</TeamName>
                </Team>
                <Vs>VS</Vs>
                <Team>
                  <TeamName>{forecast.awayTeam}</TeamName>
                </Team>
              </MatchTeams>

              <OddsWrapper>
                {forecast.odds.map((odd, idx) => (
                  <OddItem key={idx}>
                    <OddLabel>{odd.label}</OddLabel>
                    <OddValue>{odd.value}</OddValue>
                  </OddItem>
                ))}
              </OddsWrapper>

              <Preview size="sm">
                {getPreviewText(forecast.preview, forecast.id)}
              </Preview>

              {forecast.preview.length > 100 && (
                <ExpandButton onClick={() => toggleExpand(forecast.id)}>
                  {isExpanded(forecast.id) ? 'Свернуть' : 'Развернуть'}
                </ExpandButton>
              )}

              <AuthorRow>
                <AuthorAvatar>
                  {forecast.author.charAt(0)}
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{forecast.author}</AuthorName>
                  <AuthorTime>{forecast.timestamp}</AuthorTime>
                </AuthorInfo>
              </AuthorRow>
            </ForecastCard>
          ))}
        </ForecastsGrid>
      </Container>
    </Section>
  );
};