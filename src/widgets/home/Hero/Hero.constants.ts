import {
  BadgeCheck,
  ChartLine,
  Headphones,
  Target,
  Trophy,
  Percent,
  Medal,
  Clock,
} from "lucide-react";

export const FEATURE_ICONS = {
  target: Target,
  chart: ChartLine,
  headset: Headphones,
  analytics: BadgeCheck,
} as const;

export const BOTTOM_STAT_ICONS = {
  predictions: Trophy,
  success: Percent,
  championships: Medal,
  support: Clock,
} as const;

export const SECTION_ID = "main-hero";
