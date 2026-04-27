import { useContext } from "react";

import { DictionaryContext } from "./DictionaryContext";

export const useDictionary = () => {
  const dictionary = useContext(DictionaryContext);

  if (!dictionary) {
    throw new Error('useDictionary must be used within DictionaryProvider')
  };

  return dictionary;
};