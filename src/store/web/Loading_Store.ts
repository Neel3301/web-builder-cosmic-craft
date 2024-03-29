import { create } from "zustand";

interface Loading_Store {
  isDataLoading: boolean;
  setDataLoading: (isDataLoading: boolean) => void;
}

export const use_Loading_Store = create<Loading_Store>((set) => ({
  isDataLoading: false,
  setDataLoading: (isDataLoading) => {
    set((state) => ({ isDataLoading: isDataLoading }));
  },
}));
