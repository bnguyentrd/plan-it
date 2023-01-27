import { create } from "zustand";

export const useZtoken = create((set) => ({
  token: [],
  addToken: (token) =>
    set(() => ({
      token: token,
    })),
  removeToken: (token) => {
    set(() => ({
      token: token,
    }));
  },
}));
