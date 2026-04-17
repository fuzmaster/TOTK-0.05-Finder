export type Region =
  | 'Sky'
  | 'Surface'
  | 'Depths'
  | 'Central Hyrule'
  | 'Hebra'
  | 'Tabantha Frontier'
  | 'Gerudo'
  | 'Faron'
  | 'Lanayru'
  | 'Necluda'
  | 'Akkala'
  | 'Eldin';

export interface MissedLocation {
  readonly id: string;
  readonly name: string;
  readonly region: Region;
  readonly image: string;
}

export interface StoreState {
  readonly checkedIds: ReadonlyArray<string>;
  readonly searchQuery: string;
  readonly regionFilter: Region | 'All';
  readonly showUncheckedOnly: boolean;
}

export interface StoreActions {
  toggleChecked: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setRegionFilter: (region: Region | 'All') => void;
  toggleShowUncheckedOnly: () => void;
  resetChecked: () => void;
}

export type Store = StoreState & StoreActions;

export type PersistedState = Pick<StoreState, 'checkedIds'>;
