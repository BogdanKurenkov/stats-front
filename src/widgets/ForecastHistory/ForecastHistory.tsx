import { useState, useMemo, type FC } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpDown, ListFilter, ArrowUp } from "lucide-react";

import { useDictionary } from "@/shared/lib";
import { Button } from "@/shared/ui";

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
  FilterOption,
  TableWrapper,
  Table,
  TableBody,
  Th,
  ThSortable,
  Td,
  MatchCell,
  TeamLogo,
  ResultBadge,
  IncomeCell,
  BottomBanner,
  BannerIcon,
  BannerContent,
  BannerTitle,
  BannerText,
  BannerAction,
  DateCell,
  PredictionCell,
  CoefCell,
  HistoryMobileHeader,
  HistoryMobileFooter,
  TableRow,
} from "./ForecastHistory.styled";

type ResultType = "win" | "lose" | "return" | "all";

interface HistoryItem {
  id: string;
  date: string;
  teamHome: { name: string; logo: string };
  teamAway: { name: string; logo: string };
  prediction: string;
  coef: number;
  result: "win" | "lose" | "return";
  income: number;
}

const MOCK_DATA: HistoryItem[] = [
  {
    id: "1",
    date: "12 янв. 2024",
    teamHome: {
      name: "Манчестер Сити",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    teamAway: {
      name: "Арсенал",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    },
    prediction: "Победа Манчестер Сити",
    coef: 1.72,
    result: "win",
    income: 72,
  },
  {
    id: "2",
    date: "10 янв. 2024",
    teamHome: {
      name: "Реал Мадрид",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    teamAway: {
      name: "Барселона",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    prediction: "Тотал больше 2.5",
    coef: 1.85,
    result: "win",
    income: 85,
  },
  {
    id: "3",
    date: "8 янв. 2024",
    teamHome: {
      name: "Интер",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    },
    teamAway: {
      name: "Милан",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    },
    prediction: "Обе забьют — Да",
    coef: 1.79,
    result: "lose",
    income: -100,
  },
  {
    id: "4",
    date: "6 янв. 2024",
    teamHome: {
      name: "Бавария",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    },
    teamAway: {
      name: "Боруссия Д",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    },
    prediction: "Тотал больше 3.5",
    coef: 1.92,
    result: "lose",
    income: -100,
  },
  {
    id: "5",
    date: "4 янв. 2024",
    teamHome: {
      name: "Ливерпуль",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    teamAway: {
      name: "Челси",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    },
    prediction: "Победа Ливерпуля",
    coef: 1.68,
    result: "win",
    income: 68,
  },
];

type SortKey = "date" | "coef" | "result" | "income";
type SortDirection = "asc" | "desc";

export const ForecastHistory: FC = () => {
  const router = useRouter();
  const dict = useDictionary().forecasts;

  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: "date",
    direction: "desc",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ResultType>("all");

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = useMemo(() => {
    let result = MOCK_DATA;
    if (activeFilter !== "all") {
      result = result.filter((item) => item.result === activeFilter);
    }
    return [...result].sort((a, b) => {
      if (sortConfig.key === "date") {
        const dateA = new Date(a.date.replace(".", "")).getTime();
        const dateB = new Date(b.date.replace(".", "")).getTime();
        return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
      }
      if (sortConfig.key === "coef") {
        return sortConfig.direction === "asc"
          ? a.coef - b.coef
          : b.coef - a.coef;
      }
      if (sortConfig.key === "result") {
        return sortConfig.direction === "asc"
          ? a.result.localeCompare(b.result)
          : b.result.localeCompare(a.result);
      }
      if (sortConfig.key === "income") {
        return sortConfig.direction === "asc"
          ? a.income - b.income
          : b.income - a.income;
      }
      return 0;
    });
  }, [sortConfig, activeFilter]);

  return (
    <SectionWrapper>
      <Header>
        <TitleWrapper>
          <MainTitle>{dict.historyTitle || "История прогнозов"}</MainTitle>
          <Subtitle>
            {dict.historySubtitle ||
              "Примеры рассчитанных прогнозов. Актуальные статусы, юниты и ROI — в «Прогнозах»."}
          </Subtitle>
        </TitleWrapper>
        <ViewAllButton onClick={() => router.push("/forecasts")}>
          {dict.viewAll || "Все прогнозы"}
        </ViewAllButton>
      </Header>

      <FilterRow>
        <FilterText>
          {dict.historyFilterText ||
            "Пример исторических ставок за январь 2024 · Для полного ROI откройте «Прогнозы»"}
        </FilterText>
        <FilterButton
          onClick={() => setIsFilterOpen((prev) => !prev)}
          $isActive={isFilterOpen}
        >
          <ListFilter size={16} />
          {dict.historyFilterBtn || "Фильтр результатов"}
        </FilterButton>
      </FilterRow>

      {isFilterOpen && (
        <FilterPanel>
          <FilterOption
            $active={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          >
            Все
          </FilterOption>
          <FilterOption
            $active={activeFilter === "win"}
            onClick={() => setActiveFilter("win")}
          >
            Выигрыш
          </FilterOption>
          <FilterOption
            $active={activeFilter === "lose"}
            onClick={() => setActiveFilter("lose")}
          >
            Проигрыш
          </FilterOption>
          <FilterOption
            $active={activeFilter === "return"}
            onClick={() => setActiveFilter("return")}
          >
            Возврат
          </FilterOption>
          <FilterOption
            $isReset
            onClick={() => {
              setActiveFilter("all");
              setIsFilterOpen(false);
            }}
          >
            Сбросить
          </FilterOption>
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
              <Th>Матч</Th>
              <Th>Прогноз</Th>
              <ThSortable
                onClick={() => handleSort("coef")}
                $active={sortConfig.key === "coef"}
              >
                Коэф. <ArrowUpDown size={14} />
              </ThSortable>
              <ThSortable
                onClick={() => handleSort("result")}
                $active={sortConfig.key === "result"}
              >
                Результат <ArrowUpDown size={14} />
              </ThSortable>
              <ThSortable
                onClick={() => handleSort("income")}
                $active={sortConfig.key === "income"}
              >
                Доход <ArrowUpDown size={14} />
              </ThSortable>
            </tr>
          </thead>
          <TableBody>
            {filteredAndSortedData.map((item) => (
              <TableRow key={item.id}>
                <DateCell className="desktop-only">{item.date}</DateCell>

                <HistoryMobileHeader>
                  <span className="mobile-date">{item.date}</span>
                  <ResultBadge $variant={item.result}>
                    {item.result === "win"
                      ? "Выигрыш"
                      : item.result === "lose"
                        ? "Проигрыш"
                        : "Возврат"}
                  </ResultBadge>
                </HistoryMobileHeader>

                <MatchCell>
                  <div className="teams">
                    <TeamLogo
                      src={item.teamHome.logo}
                      alt={item.teamHome.name}
                    />
                    <span className="names">
                      {item.teamHome.name} — {item.teamAway.name}
                    </span>
                    <TeamLogo
                      src={item.teamAway.logo}
                      alt={item.teamAway.name}
                    />
                  </div>
                  <span className="mobile-coef">{item.coef.toFixed(2)}</span>
                </MatchCell>

                <PredictionCell>{item.prediction}</PredictionCell>

                <CoefCell className="desktop-only">
                  {item.coef.toFixed(2)}
                </CoefCell>

                <Td className="desktop-only">
                  <ResultBadge $variant={item.result}>
                    {item.result === "win"
                      ? "Выигрыш"
                      : item.result === "lose"
                        ? "Проигрыш"
                        : "Возврат"}
                  </ResultBadge>
                </Td>

                <IncomeCell
                  className="desktop-only"
                  $isWin={item.result === "win"}
                  $isReturn={item.result === "return"}
                >
                  {item.income > 0 ? `+${item.income}%` : `${item.income}%`}
                </IncomeCell>

                <HistoryMobileFooter>
                  <span className="label">Доходность при ставке 1 юнит</span>
                  <span className={`value ${item.result}`}>
                    {item.income > 0 ? `+${item.income}%` : `${item.income}%`}
                  </span>
                </HistoryMobileFooter>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>

      <BottomBanner>
        <BannerIcon>
          <ArrowUp size={20} />
        </BannerIcon>
        <BannerContent>
          <BannerTitle>
            {dict.historyBannerTitle || "Полная история ставок и ROI"}
          </BannerTitle>
          <BannerText>
            {dict.historyBannerText ||
              "Смотрите рассчитанные результаты, прибыль в юнитах и график доходности по выбранному периоду."}
          </BannerText>
        </BannerContent>
        <BannerAction>
          <Button
            variant="primary"
            onClick={() => router.push("/forecasts/stats")}
          >
            {dict.historyBannerBtn || "К статистике прогнозов"}
          </Button>
        </BannerAction>
      </BottomBanner>
    </SectionWrapper>
  );
};
