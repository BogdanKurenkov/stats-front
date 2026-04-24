import dynamic from 'next/dynamic';

import { MatchesList } from '@/widgets';
import { MOCK_MATCHES } from '@/widgets/results/MatchesList';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';


const StandingsTable = dynamic(() => import('@/widgets').then(mod => mod.StandingsTable));

const ResultsPage: NextPageWithLayout = () => {
  const upcomingMatches = MOCK_MATCHES.filter(m => m.status === 'upcoming');
  const pastMatches = MOCK_MATCHES.filter(m => m.status === 'past');

  return (
    <>
      <SEO title="Результаты" />
      <MatchesList matches={upcomingMatches} variant="upcoming" />
      <MatchesList matches={pastMatches} variant="past" />
      <StandingsTable />
    </>
  );
};

ResultsPage.layout = 'main';

export default ResultsPage;