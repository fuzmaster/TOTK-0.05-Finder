import type { MissedLocation } from './types';

export const LOCATIONS: ReadonlyArray<MissedLocation> = [
  {
    id: 'pappetto-grove',
    name: 'Pappetto Grove',
    region: 'Depths',
    image: '/locations/pappetto-grove.webp',
  },
  {
    id: 'ultra-ball-haul-check-in',
    name: 'Ultra Ball Haul Check-In',
    region: 'Tabantha Frontier',
    image: '/locations/ultra-ball-haul-check-in.webp',
  },
  {
    id: 'water-reservoir',
    name: 'Water Reservoir',
    region: 'Central Hyrule',
    image: '/locations/water-reservoir.webp',
  },
  {
    id: 'stolock-bridge',
    name: 'Stolock Bridge',
    region: 'Eldin',
    image: '/locations/stolock-bridge.webp',
  },
] as const;
