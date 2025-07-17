import { create } from "zustand";

type SearchStore = {
  query: string;
  setQuery: (value: string) => void;
  reset: () => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  selectedIndex: 0,
  setQuery: (value) => set({ query: value }),
  setSelectedIndex: (index) => set({ selectedIndex: index }),
  reset: () => set({ query: "", selectedIndex: 0 }),
}));
