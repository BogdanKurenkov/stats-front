export type MatchStatus = "upcoming" | "past";

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  tournament: string;
  leagueId: string;
  status?: MatchStatus;
}

export interface MatchesListProps {
  matches: Match[];
  title?: string;
  variant?: "upcoming" | "past";
  className?: string;
}
