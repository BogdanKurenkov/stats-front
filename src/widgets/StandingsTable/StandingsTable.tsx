import { FC, useState } from 'react';

import { Container, Section, Select, Table } from '@/shared/ui';

import {
  LEAGUE_OPTIONS,
  STANDINGS_DATA_BY_LEAGUE,
  STANDINGS_COLUMNS,
} from './StandingsTable.constants';


import {
  StandingsWrapper,
  HeaderRow,
  StandingsTitle,
  SelectWrapper,
} from './StandingsTable.styled';

export const StandingsTable: FC = () => {
  const [selectedLeague, setSelectedLeague] = useState('rpl');

  const currentData = STANDINGS_DATA_BY_LEAGUE[selectedLeague] || [];

  const handleLeagueChange = (value: string) => {
    setSelectedLeague(value);
  };

  return (
    <Section pt pb>
      <Container>
        <StandingsWrapper>
          <HeaderRow>
            <StandingsTitle as="h2" level="h2">
              Турнирная таблица
            </StandingsTitle>
            <SelectWrapper>
              <Select
                options={LEAGUE_OPTIONS}
                value={selectedLeague}
                onValueChange={handleLeagueChange}
                aria-label="Выберите лигу"
              />
            </SelectWrapper>
          </HeaderRow>
          <Table columns={STANDINGS_COLUMNS} data={currentData} />
        </StandingsWrapper>
      </Container>
    </Section>
  );
};