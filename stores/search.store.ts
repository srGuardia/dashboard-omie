import { create } from "zustand";

interface SearchState {
  searchQuery: string;
  skip: number;
  setSkip: (skip: number) => void;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  skip: 0,
  setSkip: (skip: number) => set({ skip }),
  setSearchQuery: (query: string) => set({ searchQuery: query, skip: 0 }),
  clearSearch: () => set({ searchQuery: "" }),
}));
