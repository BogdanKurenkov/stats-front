import { createContext } from "react";

import { Dictionary } from "@/shared/types";

export const DictionaryContext = createContext<Dictionary | null>(null);