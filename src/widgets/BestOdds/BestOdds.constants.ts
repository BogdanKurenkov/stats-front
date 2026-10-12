export const SECTION_ID = "best-odds";

export type BookmakerId = "1xbet" | "bet365" | "winline" | "pari";

export const BOOKMAKER_LOGOS: Record<
  BookmakerId,
  { src: string; width: number; height: number }
> = {
  "1xbet": { src: "/images/bookmakers/1xbet.png", width: 96, height: 24 },
  bet365: { src: "/images/bookmakers/1xbet.png", width: 96, height: 24 },
  winline: { src: "/images/bookmakers/1xbet.png", width: 110, height: 24 },
  pari: { src: "/images/bookmakers/1xbet.png", width: 80, height: 24 },
};
