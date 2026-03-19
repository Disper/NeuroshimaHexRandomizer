import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/irongang';

export const ironGang: Army = {
  id: 'iron-gang',
  name: 'Iron Gang',
  color: '#141414',
  accentColor: '#94a3b8',
  description:
    'A biker gang that rules the roads with brute force and mobility. Iron Gang fields Lumberjacks, Mountains, and Motorcyclists, backed by the unique Order token — the most versatile instant in the game, with nine copies.',
  hqAbility: 'All friendly adjacent units gain +1 melee attack strength.',
  hqImageUrl: `${BASE}/irongang-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'ig-double-move', name: 'Double Move', category: 'instant', count: 2, imageUrl: `${BASE}/irongang-podwojnyruch.png` },
    { id: 'ig-order', name: 'Order', category: 'instant', count: 9, imageUrl: `${BASE}/irongang-rozkaz.png` },

    // Soldiers
    { id: 'ig-fanatic', name: 'Fanatic', category: 'soldier', count: 3, imageUrl: `${BASE}/irongang-fanatyk.png` },
    { id: 'ig-ranged-netter', name: 'Ranged Netter', category: 'soldier', count: 3, imageUrl: `${BASE}/irongang-sieciarzdystansowy.png` },
    { id: 'ig-lumberjack', name: 'Lumberjack', category: 'soldier', count: 5, imageUrl: `${BASE}/irongang-drwal.png` },
    { id: 'ig-mountain', name: 'Mountain', category: 'soldier', count: 3, imageUrl: `${BASE}/irongang-gora.png` },
    { id: 'ig-motorcyclist', name: 'Motorcyclist', category: 'soldier', count: 4, imageUrl: `${BASE}/irongang-motocyklista.png` },

    // Modules
    { id: 'ig-officer', name: 'Officer', category: 'module', count: 4, imageUrl: `${BASE}/irongang-oficer.png` },
    { id: 'ig-boss', name: 'Boss', category: 'module', count: 1, imageUrl: `${BASE}/irongang-szef.png` },
    { id: 'ig-hook', name: 'Hook', category: 'module', count: 1, imageUrl: `${BASE}/irongang-hak.jpg` },
  ],
};
