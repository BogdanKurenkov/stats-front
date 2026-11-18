export interface ForecastTeam {
  name: string;
  logo: string;
}

export interface ForecastCardData {
  id: string;
  countryFlag: string;
  league: string;
  date: string;
  time: string;
  teamHome: ForecastTeam;
  teamAway: ForecastTeam;
  predictionTitle: string;
  coefficient: number;
  description: string;
  expertRating: number;
}
