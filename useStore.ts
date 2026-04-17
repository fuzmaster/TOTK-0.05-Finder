import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Store, PersistedState } from './types';

const STORAGE_KEY = 'totk-finder-v1';

export const useStore = create<Store>()(
  persist(
    (set) => ({
      checkedIds: [],
      searchQuery: '',
      regionFilter: 'All',
      showUncheckedOnly: false,

      toggleChecked: (id) =>
        set((state) => {
          const has = state.checkedIds.includes(id);
          return {
            checkedIds: has
              ? state.checkedIds.filter((x) => x !== id)
              : [...state.checkedIds, id],
          };
        }),

      setSearchQuery: (searchQuery) => set({ searchQuery }),

      setRegionFilter: (regionFilter) => set({ regionFilter }),

      toggleShowUncheckedOnly: () =>
        set((state) => ({ showUncheckedOnly: !state.showUncheckedOnly })),

      resetChecked: () => set({ checkedIds: [] }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      version: 1,
      partialize: (state): PersistedState => ({
        checkedIds: state.checkedIds,
      }),
    },
  ),
);
