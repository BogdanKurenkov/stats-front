import { MatchesList, StandingsTable } from '@/widgets';
import { MOCK_MATCHES } from '@/widgets/results/MatchesList';
import { NextPageWithLayout } from '@/shared/types';

const ResultsPage: NextPageWithLayout = () => {
  const upcomingMatches = MOCK_MATCHES.filter(m => m.status === 'upcoming');
  const pastMatches = MOCK_MATCHES.filter(m => m.status === 'past');

  return (
    <>
      <MatchesList matches={upcomingMatches} variant="upcoming" />
      <MatchesList matches={pastMatches} variant="past" />
      <StandingsTable />
    </>
  );
};

ResultsPage.layout = 'main';

export default ResultsPage;