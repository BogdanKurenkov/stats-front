import { createContext } from "react";

import { Dictionary } from "@/shared";

export const DictionaryContext = createContext<Dictionary | null>(null);