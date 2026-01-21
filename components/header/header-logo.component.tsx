"use client";

import { useSearchStore } from "@/stores";
import { LogoStyle } from "./styles";

export const HeaderLogo = () => {
  const { clearSearch } = useSearchStore();

  const handleClearSearch = () => {
    clearSearch();
  };

  return <LogoStyle onClick={handleClearSearch}>Omie</LogoStyle>;
};
