import { createContext } from "react";

import type { Dictionary } from "@/shared";

export const DictionaryContext = createContext<Dictionary | null>(null);
