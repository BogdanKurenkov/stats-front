import { useState, useMemo, type FC } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpDown, ListFilter } from "lucide-react";

import { useDictionary } from "@/shared/lib";
import { Select } from "@/shared/ui";

import {
  SectionWrapper,
  Header,
  TitleWrapper,
  MainTitle,
  Subtitle,
  ViewAllButton,
  FilterRow,
  FilterText,
  FilterButton,
  FilterPanel,
  FilterActions,
  TableWrapper,
  Table,
  TableBody,
  Th,
  ThSortable,
  Td,
  DateCell,
  TournamentCell,
  MatchCell,
  TeamLogo,
  ScoreCell,
  FlexWrapper,
  MobileFooterRow,
  TableRow,
} from "./MatchResults.styled";

interface MatchItem {
  id: string;
  date: string;
  countryCode: string;
  league: string;
  teamHome: { name: string; logo: string };
  teamAway: { name: string; logo: string };
  score: string;
}

const MOCK_DATA: MatchItem[] = [
  {
    id: "1",
    date: "12 янв. 2024",
    countryCode: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    league: "Англия, Премьер-лига",
    teamHome: {
      name: "Ливерпуль",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    teamAway: {
      name: "Челси",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    },
    score: "2:1",
  },
  {
    id: "2",
    date: "11 янв. 2024",
    countryCode: "🇪🇸",
    league: "Испания, Ла Лига",
    teamHome: {
      name: "Атлетико",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    },
    teamAway: {
      name: "Севилья",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    },
    score: "1:0",
  },
  {
    id: "3",
    date: "10 янв. 2024",
    countryCode: "🇮🇹",
    league: "Италия, Серия А",
    teamHome: {
      name: "Ювентус",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
    },
    teamAway: {
      name: "Болонья",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bologna_F.C._1909_logo.svg",
    },
    score: "3:1",
  },
  {
    id: "4",
    date: "9 янв. 2024",
    countryCode: "🇩🇪",
    league: "Германия, Бундеслига",
    teamHome: {
      name: "Лейпциг",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg",
    },
    teamAway: {
      name: "Боруссия Д",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    },
    score: "2:0",
  },
  {
    id: "5",
    date: "8 янв. 2024",
    countryCode: "🇫🇷",
    league: "Франция, Лига 1",
    teamHome: {
      name: "ПСЖ",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    },
    teamAway: {
      name: "Лион",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c0/Olympique_Lyonnais_logo.svg",
    },
    score: "2:0",
  },
];

type SortKey = "date" | "league";
type SortDirection = "asc" | "desc";

export const MatchResults: FC = () => {
  const router = useRouter();
  const dict = useDictionary().forecasts;

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState<string>("all");

  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: "date",
    direction: "desc",
  });

  const leagueOptions = useMemo(() => {
    const uniqueLeagues = Array.from(
      new Set(MOCK_DATA.map((item) => item.league)),
    );
    return [
      { value: "all", label: "Все лиги" },
      ...uniqueLeagues.map((league) => ({ value: league, label: league })),
    ];
  }, []);

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleResetFilters = () => {
    setSelectedLeague("all");
    setSortConfig({ key: "date", direction: "desc" });
  };

  const filteredAndSortedData = useMemo(() => {
    let result = MOCK_DATA;
    if (selectedLeague !== "all") {
      result = result.filter((item) => item.league === selectedLeague);
    }
    return [...result].sort((a, b) => {
      if (sortConfig.key === "date") {
        const dateA = new Date(a.date.replace(".", "")).getTime();
        const dateB = new Date(b.date.replace(".", "")).getTime();
        return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
      }
      if (sortConfig.key === "league") {
        return sortConfig.direction === "asc"
          ? a.league.localeCompare(b.league)
          : b.league.localeCompare(a.league);
      }
      return 0;
    });
  }, [sortConfig, selectedLeague]);

  return (
    <SectionWrapper>
      <Header>
        <TitleWrapper>
          <MainTitle>{dict.resultsTitle || "Результаты матчей"}</MainTitle>
          <Subtitle>
            {dict.resultsSubtitle ||
              "Краткое превью завершённых матчей. Все результаты, таблицы и xG — в «Статистике»."}
          </Subtitle>
        </TitleWrapper>
        <ViewAllButton onClick={() => router.push("/match-center")}>
          {dict.matchCenter || "В матч-центр"}
        </ViewAllButton>
      </Header>

      <FilterRow>
        <FilterText>
          {dict.resultsFilterText ||
            "Исторический пример · январь 2024 · не текущие результаты"}
        </FilterText>
        <FilterButton
          onClick={() => setIsFilterOpen((prev) => !prev)}
          $isActive={isFilterOpen}
        >
          <ListFilter size={16} />
          {dict.resultsFilterBtn || "Фильтр лиги"}
        </FilterButton>
      </FilterRow>

      {isFilterOpen && (
        <FilterPanel>
          <Select
            options={leagueOptions}
            value={selectedLeague}
            onValueChange={setSelectedLeague}
            placeholder="Выберите лигу"
          />
          <FilterActions>
            <button type="button" onClick={handleResetFilters}>
              Сбросить
            </button>
          </FilterActions>
        </FilterPanel>
      )}

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <ThSortable
                onClick={() => handleSort("date")}
                $active={sortConfig.key === "date"}
              >
                Дата <ArrowUpDown size={14} />
              </ThSortable>
              <ThSortable
                onClick={() => handleSort("league")}
                $active={sortConfig.key === "league"}
              >
                Турнир <ArrowUpDown size={14} />
              </ThSortable>
              <Th>Матч</Th>
              <Th style={{ textAlign: "right" }}>Счёт</Th>
            </tr>
          </thead>
          <TableBody>
            {filteredAndSortedData.map((item) => (
              <TableRow key={item.id}>
                <TournamentCell>
                  <FlexWrapper>
                    <span className="flag">{item.countryCode}</span>
                    <span>{item.league}</span>
                  </FlexWrapper>
                </TournamentCell>
                <DateCell>{item.date}</DateCell>

                <MatchCell>
                  <FlexWrapper className="desktop-only">
                    <TeamLogo
                      src={item.teamHome.logo}
                      alt={item.teamHome.name}
                    />
                    <span>{item.teamHome.name}</span>
                    <span className="dash">—</span>
                    <TeamLogo
                      src={item.teamAway.logo}
                      alt={item.teamAway.name}
                    />
                    <span>{item.teamAway.name}</span>
                  </FlexWrapper>

                  <div className="mobile-only">
                    <div className="team">
                      <TeamLogo
                        src={item.teamHome.logo}
                        alt={item.teamHome.name}
                      />
                      <span>{item.teamHome.name}</span>
                    </div>
                    <ScoreCell>{item.score}</ScoreCell>
                    <div className="team away">
                      <span>{item.teamAway.name}</span>
                      <TeamLogo
                        src={item.teamAway.logo}
                        alt={item.teamAway.name}
                      />
                    </div>
                  </div>
                </MatchCell>

                <Td
                  className="desktop-only"
                  style={{
                    textAlign: "right",
                    color: "theme.colors.orange.primary",
                    fontWeight: 700,
                  }}
                >
                  {item.score}
                </Td>

                <MobileFooterRow>
                  <span className="result-label">
                    Результат по основному времени
                  </span>
                  <button
                    className="details-btn"
                    onClick={() => router.push(`/match/${item.id}`)}
                  >
                    Подробнее →
                  </button>
                </MobileFooterRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </SectionWrapper>
  );
};
