import { type FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Container, Section } from '@/shared/ui';
import { ROUTES } from '@/shared';

import { FORECASTS, TEXT_DEFAULT } from './ForecastsList.constants';

import { ForecastsListProps } from './ForecastsList.types';

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
  StyledTitle,
} from './ForecastsList.styled';

export const ForecastsList: FC<ForecastsListProps> = ({ isAdmin, text = TEXT_DEFAULT }) => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const { push } = useRouter()

  const handleNavigate = (id: number) => {
    if (isAdmin) {
      push(ROUTES.ADMIN_FORECASTS.DETAILS(id))
    }
  }

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
        <StyledTitle as="h2" level="h2">
          {text}
        </StyledTitle>

        <ForecastsGrid>
          {FORECASTS.map((forecast) => (
            <ForecastCard key={forecast.id} onClick={() => handleNavigate(forecast.id)}>
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
                <ExpandButton onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(forecast.id);
                }}>
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