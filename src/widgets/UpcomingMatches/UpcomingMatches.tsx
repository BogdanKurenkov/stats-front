import { useState, useMemo, type FC, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Play, LayoutGrid, Trophy, ChevronRight } from "lucide-react";

import { ROUTES } from "@/shared/config";
import { Pagination } from "@/shared/ui";

import {
  WidgetContainer,
  TopFilters,
  FilterPill,
  FilterPillActive,
  WidgetGrid,
  MainCard,
  SideCard,
  CardHeader,
  CardTitleGroup,
  CardTitle,
  CardSubtitle,
  ActionButton,
  DesktopTable,
  TableHeader,
  TableRow,
  DateCell,
  MatchCell,
  TeamInfo,
  LeagueCell,
  LeagueInfo,
  LeagueName,
  CountryName,
  PaginationRow,
  PaginationText,
  LeagueList,
  LeagueListItem,
  LeagueItemInfo,
  LeagueItemMeta,
  MatchesBadge,
  NoteText,
  MobileMatchCard,
  MobileHeader,
  MobileTeams,
  MobileTeam,
  Divider,
  LogoImage,
  FlagImage,
  LeagueFlagImage,
  BroadcastBtnWrapper,
} from "./UpcomingMatches.styled";

const FILTERS = [
  { id: "all", label: "Все лиги", flag: null },
  { id: "АПЛ", label: "АПЛ", flag: "/images/leagues/uk.png" },
  { id: "Ла Лига", label: "Ла Лига", flag: "/images/leagues/es.png" },
  { id: "Серия А", label: "Серия А", flag: "/images/leagues/it.png" },
  { id: "Бундеслига", label: "Бундеслига", flag: "/images/leagues/gr.png" },
  { id: "Лига 1", label: "Лига 1", flag: "/images/leagues/fr.png" },
  { id: "Бразилия", label: "Бразилия", flag: "/images/leagues/br.png" },
  { id: "Аргентина", label: "Аргентина", flag: "/images/leagues/arg.png" },
  {
    id: "Либертадорес",
    label: "Либертадорес",
    flag: "/images/leagues/lib.png",
  },
];

const MATCHES = [
  {
    id: "1",
    date: "11 ноя.",
    time: "22:00",
    home: {
      name: "Манчестер Сити",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    away: {
      name: "Арсенал",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    },
    league: "АПЛ",
    country: "Англия",
    flag: "/images/leagues/uk.png",
  },
  {
    id: "2",
    date: "11 ноя.",
    time: "20:00",
    home: {
      name: "Челси",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    },
    away: {
      name: "Эвертон",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
    },
    league: "АПЛ",
    country: "Англия",
    flag: "/images/leagues/uk.png",
  },
  {
    id: "3",
    date: "11 ноя.",
    time: "19:15",
    home: {
      name: "Челси",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    },
    away: {
      name: "Тоттенхэм",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    },
    league: "АПЛ",
    country: "Англия",
    flag: "/images/leagues/uk.png",
  },
  {
    id: "4",
    date: "10 ноя.",
    time: "23:15",
    home: {
      name: "Астон Вилла",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_new_crest.svg",
    },
    away: {
      name: "Ливерпуль",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    league: "АПЛ",
    country: "Англия",
    flag: "/images/leagues/uk.png",
  },
  {
    id: "5",
    date: "10 ноя.",
    time: "22:30",
    home: {
      name: "Астон Вилла",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_new_crest.svg",
    },
    away: {
      name: "Брайтон",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
    },
    league: "АПЛ",
    country: "Англия",
    flag: "/images/leagues/uk.png",
  },
  {
    id: "6",
    date: "12 ноя.",
    time: "21:00",
    home: {
      name: "Реал Мадрид",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    away: {
      name: "Барселона",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    league: "Ла Лига",
    country: "Испания",
    flag: "/images/leagues/es.png",
  },
  {
    id: "7",
    date: "12 ноя.",
    time: "19:30",
    home: {
      name: "Атлетико",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    },
    away: {
      name: "Севилья",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    },
    league: "Ла Лига",
    country: "Испания",
    flag: "/images/leagues/es.png",
  },
  {
    id: "8",
    date: "11 ноя.",
    time: "23:00",
    home: {
      name: "Вильярреал",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg",
    },
    away: {
      name: "Валенсия",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg",
    },
    league: "Ла Лига",
    country: "Испания",
    flag: "/images/leagues/es.png",
  },
  {
    id: "9",
    date: "13 ноя.",
    time: "20:00",
    home: {
      name: "Интер",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    },
    away: {
      name: "Милан",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    },
    league: "Серия А",
    country: "Италия",
    flag: "/images/leagues/it.png",
  },
  {
    id: "10",
    date: "12 ноя.",
    time: "22:45",
    home: {
      name: "Ювентус",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
    },
    away: {
      name: "Наполи",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
    },
    league: "Серия А",
    country: "Италия",
    flag: "/images/leagues/it.png",
  },
  {
    id: "11",
    date: "11 ноя.",
    time: "19:00",
    home: {
      name: "Рома",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
    },
    away: {
      name: "Лацио",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/03/S.S._Lazio_logo_%282018%29.svg",
    },
    league: "Серия А",
    country: "Италия",
    flag: "/images/leagues/it.png",
  },
  {
    id: "12",
    date: "12 ноя.",
    time: "19:30",
    home: {
      name: "Бавария",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    },
    away: {
      name: "Боруссия Д",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    },
    league: "Бундеслига",
    country: "Германия",
    flag: "/images/leagues/gr.png",
  },
  {
    id: "13",
    date: "11 ноя.",
    time: "21:30",
    home: {
      name: "Лейпциг",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg",
    },
    away: {
      name: "Байер",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
    },
    league: "Бундеслига",
    country: "Германия",
    flag: "/images/leagues/gr.png",
  },
  {
    id: "14",
    date: "10 ноя.",
    time: "20:30",
    home: {
      name: "Штутгарт",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/VfB_Stuttgart_1893_Logo.svg",
    },
    away: {
      name: "Айнтрахт",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg",
    },
    league: "Бундеслига",
    country: "Германия",
    flag: "/images/leagues/gr.png",
  },
  {
    id: "15",
    date: "12 ноя.",
    time: "22:00",
    home: {
      name: "ПСЖ",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    },
    away: {
      name: "Марсель",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a5/Olympique_de_Marseille_2017_logo.svg",
    },
    league: "Лига 1",
    country: "Франция",
    flag: "/images/leagues/fr.png",
  },
  {
    id: "16",
    date: "11 ноя.",
    time: "18:00",
    home: {
      name: "Лион",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c0/Olympique_Lyonnais_logo.svg",
    },
    away: {
      name: "Монако",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/AS_Monaco_FC_logo.svg",
    },
    league: "Лига 1",
    country: "Франция",
    flag: "/images/leagues/fr.png",
  },
  {
    id: "17",
    date: "13 ноя.",
    time: "01:00",
    home: {
      name: "Фламенго",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Clube_de_Regatas_do_Flamengo_logo.svg",
    },
    away: {
      name: "Палмейрас",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Sociedade_Esportiva_Palmeiras_logo.svg",
    },
    league: "Бразилия",
    country: "Бразилия",
    flag: "/images/leagues/br.png",
  },
  {
    id: "18",
    date: "12 ноя.",
    time: "23:30",
    home: {
      name: "Коринтианс",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Sport_Club_Corinthians_Paulista_logo.svg",
    },
    away: {
      name: "Сан-Паулу",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4d/S%C3%A3o_Paulo_FC_logo.svg",
    },
    league: "Бразилия",
    country: "Бразилия",
    flag: "/images/leagues/br.png",
  },
  {
    id: "19",
    date: "13 ноя.",
    time: "02:00",
    home: {
      name: "Бока Хуниорс",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/CA_Boca_Juniors_logo.svg",
    },
    away: {
      name: "Ривер Плейт",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Club_Atl%C3%A9tico_River_Plate_logo.svg",
    },
    league: "Аргентина",
    country: "Аргентина",
    flag: "/images/leagues/arg.png",
  },
  {
    id: "20",
    date: "14 ноя.",
    time: "03:00",
    home: {
      name: "Флуминенсе",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Fluminense_FC_logo.svg",
    },
    away: {
      name: "Пеньяроль",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Club_Atl%C3%A9tico_Pe%C3%B1arol_logo.svg",
    },
    league: "Либертадорес",
    country: "Южная Америка",
    flag: "/images/leagues/lib.png",
  },
];

const POPULAR_LEAGUES = [
  {
    id: "1",
    name: "АПЛ",
    country: "Англия",
    flag: "/images/leagues/uk.png",
    count: 7,
  },
  {
    id: "2",
    name: "Ла Лига",
    country: "Испания",
    flag: "/images/leagues/es.png",
    count: 4,
  },
  {
    id: "3",
    name: "Серия А",
    country: "Италия",
    flag: "/images/leagues/it.png",
    count: 3,
  },
  {
    id: "4",
    name: "Бундеслига",
    country: "Германия",
    flag: "/images/leagues/gr.png",
    count: 3,
  },
  {
    id: "5",
    name: "Лига 1",
    country: "Франция",
    flag: "/images/leagues/fr.png",
    count: 2,
  },
];

export const UpcomingMatches: FC = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredMatches = useMemo(() => {
    if (activeFilter === "all") return MATCHES;
    return MATCHES.filter((m) => m.league === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredMatches.length / itemsPerPage);
  const currentMatches = filteredMatches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setCurrentPage(1);
  };

  return (
    <WidgetContainer>
      <TopFilters>
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.id;
          const Component = isActive ? FilterPillActive : FilterPill;
          return (
            <Component key={f.id} onClick={() => handleFilterChange(f.id)}>
              {f.flag && (
                <FlagImage src={f.flag} alt={f.label} width={18} height={12} />
              )}
              {f.label}
            </Component>
          );
        })}
      </TopFilters>

      <WidgetGrid>
        <MainCard>
          <CardHeader>
            <CardTitleGroup>
              <LayoutGrid size={20} color="#F97316" />
              <div>
                <CardTitle>Предстоящие матчи</CardTitle>
                <CardSubtitle>
                  Ближайшие встречи и переход в раздел трансляций
                </CardSubtitle>
              </div>
            </CardTitleGroup>
            <ActionButton onClick={() => router.push(ROUTES.BROADCASTS)}>
              Матч-центр ↗
            </ActionButton>
          </CardHeader>

          <DesktopTable>
            <TableHeader>
              <div>Дата</div>
              <div>Матч</div>
              <div>Лига / Страна</div>
              <div>Трансляция</div>
            </TableHeader>
            {currentMatches.map((match) => (
              <TableRow key={match.id}>
                <DateCell>
                  <span className="date">{match.date}</span>
                  <span className="time">{match.time}</span>
                </DateCell>
                <MatchCell>
                  <TeamInfo>
                    <LogoImage
                      src={match.home.logo}
                      alt={match.home.name}
                      width={20}
                      height={20}
                    />
                    <span>{match.home.name}</span>
                  </TeamInfo>
                  <span className="dash">—</span>
                  <TeamInfo>
                    <LogoImage
                      src={match.away.logo}
                      alt={match.away.name}
                      width={20}
                      height={20}
                    />
                    <span>{match.away.name}</span>
                  </TeamInfo>
                </MatchCell>
                <LeagueCell>
                  <FlagImage
                    src={match.flag}
                    alt={match.country}
                    width={24}
                    height={16}
                  />
                  <LeagueInfo>
                    <LeagueName>{match.league}</LeagueName>
                    <CountryName>{match.country}</CountryName>
                  </LeagueInfo>
                </LeagueCell>
                <BroadcastBtnWrapper>
                  <ActionButton
                    className="outline"
                    onClick={() => router.push(ROUTES.BROADCASTS)}
                  >
                    <Play size={14} fill="currentColor" />
                    Смотреть трансляцию
                  </ActionButton>
                </BroadcastBtnWrapper>
              </TableRow>
            ))}
          </DesktopTable>

          <div className="mobile-cards">
            {currentMatches.map((match) => (
              <MobileMatchCard key={match.id}>
                <MobileHeader>
                  <span className="league">
                    <FlagImage
                      src={match.flag}
                      alt={match.country}
                      width={18}
                      height={12}
                    />{" "}
                    {match.league} · {match.country}
                  </span>
                  <span className="date">
                    {match.date} · {match.time}
                  </span>
                </MobileHeader>
                <MobileTeams>
                  <MobileTeam>
                    <LogoImage
                      src={match.home.logo}
                      alt={match.home.name}
                      width={32}
                      height={32}
                    />
                    <span>{match.home.name}</span>
                  </MobileTeam>
                  <span className="vs">VS</span>
                  <MobileTeam>
                    <LogoImage
                      src={match.away.logo}
                      alt={match.away.name}
                      width={32}
                      height={32}
                    />
                    <span>{match.away.name}</span>
                  </MobileTeam>
                </MobileTeams>
                <ActionButton
                  className="outline full-width"
                  onClick={() => router.push(ROUTES.BROADCASTS)}
                >
                  <Play size={14} fill="currentColor" />
                  Смотреть трансляцию
                </ActionButton>
              </MobileMatchCard>
            ))}
          </div>

          <PaginationRow>
            <PaginationText>
              Показано {currentMatches.length} из {filteredMatches.length} ·
              демо
            </PaginationText>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </PaginationRow>
        </MainCard>

        <SideCard>
          <CardHeader>
            <CardTitleGroup>
              <Trophy size={20} color="#F97316" />
              <div>
                <CardTitle>Популярные лиги</CardTitle>
                <CardSubtitle>
                  Выберите чемпионат для просмотра матчей
                </CardSubtitle>
              </div>
            </CardTitleGroup>
          </CardHeader>

          <LeagueList>
            {POPULAR_LEAGUES.map((league, index) => (
              <Fragment key={league.id}>
                <LeagueListItem onClick={() => handleFilterChange(league.name)}>
                  <LeagueFlagImage
                    src={league.flag}
                    alt={league.country}
                    width={28}
                    height={20}
                  />
                  <LeagueItemInfo>
                    <LeagueName>{league.name}</LeagueName>
                    <CountryName>{league.country}</CountryName>
                  </LeagueItemInfo>
                  <LeagueItemMeta>
                    <MatchesBadge>{league.count} матчей</MatchesBadge>
                    <ChevronRight size={16} color="#A3A3A3" />
                  </LeagueItemMeta>
                </LeagueListItem>
                {index < POPULAR_LEAGUES.length - 1 && <Divider />}
              </Fragment>
            ))}
          </LeagueList>
        </SideCard>
      </WidgetGrid>

      <NoteText>
        Демонстрационные встречи и котировки из дизайн-референса; даты,
        коэффициенты и доступность видео не подтверждены. Истинное вещание не
        подключено.
      </NoteText>
    </WidgetContainer>
  );
};
