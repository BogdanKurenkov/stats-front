import dynamic from "next/dynamic";

import { MatchesList } from "@/widgets";
import { MOCK_MATCHES } from "@/widgets/results/MatchesList";

const StandingsTable = dynamic(() =>
  import("@/widgets").then((mod) => mod.StandingsTable),
);

import { loadMessages, type NextPageWithLayout, Seo } from "@/shared";

const ResultsPage: NextPageWithLayout = () => {
  const upcomingMatches = MOCK_MATCHES.filter((m) => m.status === "upcoming");
  const pastMatches = MOCK_MATCHES.filter((m) => m.status === "past");

  return (
    <>
      <Seo title="Результаты" />
      <MatchesList matches={upcomingMatches} variant="upcoming" />
      <MatchesList matches={pastMatches} variant="past" />
      <StandingsTable />
    </>
  );
};

ResultsPage.layout = "main";

export default ResultsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
