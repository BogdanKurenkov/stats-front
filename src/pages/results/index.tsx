import { NextPageWithLayout } from '@/shared/types';
import { StandingsTable } from '@/widgets';

const ResultsPage: NextPageWithLayout = () => {
  return <>
    <StandingsTable />
  </>;
};

ResultsPage.layout = 'main';

export default ResultsPage;