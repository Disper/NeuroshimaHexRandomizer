import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/vegas';

export const vegas: Army = {
  id: 'vegas',
  name: 'Vegas',
  color: '#1a0f0a',
  accentColor: '#eab308',
  description:
    'A casino-run city-state where mercenaries and bodyguards enforce the house rules. Vegas excels at repositioning — Rotation, Castling, and Push tokens let it shuffle the board, while Agitators and Shooters apply pressure.',
  hqAbility: 'All friendly adjacent units gain +1 to all attacks.',
  hqImageUrl: `${BASE}/vegas-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'vegas-battle', name: 'Battle', category: 'instant', count: 5, imageUrl: `${BASE}/vegas-bitwa.png` },
    { id: 'vegas-rotation', name: 'Rotation', category: 'instant', count: 3, imageUrl: `${BASE}/vegas-obrot.png` },
    { id: 'vegas-push', name: 'Push', category: 'instant', count: 3, imageUrl: `${BASE}/vegas-odepchniecie.png` },
    { id: 'vegas-castling', name: 'Castling', category: 'instant', count: 2, imageUrl: `${BASE}/vegas-roszada.png` },
    { id: 'vegas-move', name: 'Move', category: 'instant', count: 3, imageUrl: `${BASE}/vegas-ruch.png` },
    { id: 'vegas-sniper', name: 'Sniper', category: 'instant', count: 1, imageUrl: `${BASE}/vegas-snajper.png` },

    // Soldiers
    { id: 'vegas-mercenary', name: 'Mercenary', category: 'soldier', count: 2, imageUrl: `${BASE}/vegas-najemnik.png` },
    { id: 'vegas-bodyguard', name: 'Bodyguard', category: 'soldier', count: 2, imageUrl: `${BASE}/vegas-ochroniarz.png` },
    { id: 'vegas-guardian', name: 'Guardian', category: 'soldier', count: 2, imageUrl: `${BASE}/vegas-straznik.png` },
    { id: 'vegas-shooter', name: 'Shooter', category: 'soldier', count: 2, imageUrl: `${BASE}/vegas-strzelec.png` },

    // Modules
    { id: 'vegas-agitator', name: 'Agitator', category: 'module', count: 3, imageUrl: `${BASE}/vegas-agitator.png` },
    { id: 'vegas-saboteur', name: 'Saboteur', category: 'module', count: 1, imageUrl: `${BASE}/vegas-dywersant.png` },
    { id: 'vegas-medic', name: 'Medic', category: 'module', count: 1, imageUrl: `${BASE}/vegas-medyk.png` },
    { id: 'vegas-scout', name: 'Scout', category: 'module', count: 2, imageUrl: `${BASE}/vegas-zwiadowca.png` },
    { id: 'vegas-mine', name: 'Mine', category: 'module', count: 2, imageUrl: `${BASE}/vegas-mina.png` },
  ],
};
