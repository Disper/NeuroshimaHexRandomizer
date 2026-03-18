import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/druciarze';

export const wiremen: Army = {
  id: 'wiremen',
  name: 'Wiremen',
  color: '#0f2520',
  accentColor: '#2dd4bf',
  description:
    'A community of rebels living inside Moloch itself — rogue cyborgs, escaped mutants, researchers and survivors. They fight using stolen Machine resources and cutting-edge cybernetics, blurring the line between friend and foe.',
  hqAbility:
    'Inspirator — once per turn the Wiremen player may place an Inspiration marker on any Technology token.',
  hqImageUrl: `${BASE}/druciarze-sztab.jpg`,
  tiles: [
    // Instant / Technology tokens (dual-purpose)
    {
      id: 'wiremen-sniper',
      name: 'Sniper',
      category: 'instant',
      count: 1,
      imageUrl: `${BASE}/druciarze-snajper.jpg`,
    },
    {
      id: 'wiremen-castling',
      name: 'Castling',
      category: 'instant',
      count: 2,
      imageUrl: `${BASE}/druciarze-roszada.jpg`,
    },
    {
      id: 'wiremen-push',
      name: 'Push',
      category: 'instant',
      count: 3,
      imageUrl: `${BASE}/druciarze-odepchniecie.jpg`,
    },
    {
      id: 'wiremen-move',
      name: 'Move',
      category: 'instant',
      count: 4,
      imageUrl: `${BASE}/druciarze-ruch.jpg`,
    },
    {
      id: 'wiremen-battle',
      name: 'Battle',
      category: 'instant',
      count: 5,
      imageUrl: `${BASE}/druciarze-bitwa.jpg`,
    },

    // Soldiers
    {
      id: 'wiremen-sentinel',
      name: 'Sentinel',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/druciarze-sentinel.jpg`,
    },
    {
      id: 'wiremen-machine-killer',
      name: 'Machine Killer',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/druciarze-zabojca-maszyn.jpg`,
    },
    {
      id: 'wiremen-psychocyborg',
      name: 'Psychocyborg',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/druciarze-psychocyborg.jpg`,
    },
    {
      id: 'wiremen-scorpion',
      name: 'Scorpion',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/druciarze-skorpion.jpg`,
    },
    {
      id: 'wiremen-tetra',
      name: 'Tetra',
      category: 'soldier',
      count: 3,
      imageUrl: `${BASE}/druciarze-tetra.jpg`,
    },
    {
      id: 'wiremen-wasp',
      name: 'Wasp',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/druciarze-osa.jpg`,
    },
    {
      id: 'wiremen-weeper',
      name: 'Weeper',
      category: 'soldier',
      count: 3,
      imageUrl: `${BASE}/druciarze-placzka.jpg`,
    },
    {
      id: 'wiremen-umo-soldier',
      name: 'UMO Soldier',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/druciarze-zolnierz-umo.jpg`,
    },
    {
      id: 'wiremen-error',
      name: 'Error',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/druciarze-error.jpg`,
    },
    {
      id: 'wiremen-wireman',
      name: 'Wireman',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/druciarze-druciarz.jpg`,
    },
  ],
};
