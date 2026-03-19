import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/partyzanci';

export const partisans: Army = {
  id: 'partisans',
  name: 'Partisans',
  color: '#14100a',
  accentColor: '#facc15',
  description:
    'Resistance fighters who strike from the shadows. Partisans combine Tactics and Withdrawal tokens for flexibility, Cyborg Charlie and Provocateurs for board control, and a mix of specialists — Bunker Manager, Sleeper Agent, Dr. Assistant.',
  hqAbility: 'All friendly adjacent units gain +1 to all attacks.',
  hqImageUrl: `${BASE}/partyzanci-sztab.jpg`,
  tiles: [
    // Instant tokens
    { id: 'part-withdrawal', name: 'Withdrawal', category: 'instant', count: 1, imageUrl: `${BASE}/partyzanci-wycofanie.jpg` },
    { id: 'part-tactics', name: 'Tactics', category: 'instant', count: 4, imageUrl: `${BASE}/partyzanci-taktyka.jpg` },
    { id: 'part-move', name: 'Move', category: 'instant', count: 3, imageUrl: `${BASE}/partyzanci-ruch.jpg` },
    { id: 'part-battle', name: 'Battle', category: 'instant', count: 5, imageUrl: `${BASE}/partyzanci-bitwa.jpg` },

    // Soldiers
    { id: 'part-bunker-manager', name: 'Bunker Manager', category: 'soldier', count: 1, imageUrl: `${BASE}/partyzanci-zarzadca-bunkra.jpg` },
    { id: 'part-sleeper-agent', name: 'Sleeper Agent', category: 'soldier', count: 2, imageUrl: `${BASE}/partyzanci-uspiony-agent.jpg` },
    { id: 'part-doctor-assistant', name: 'Doctor Assistant', category: 'soldier', count: 2, imageUrl: `${BASE}/partyzanci-asystentka-doktora.jpg` },
    { id: 'part-guard-drone', name: 'Guard Drone', category: 'soldier', count: 1, imageUrl: `${BASE}/partyzanci-dron-straznik.jpg` },
    { id: 'part-cyborg-charlie', name: 'Cyborg Charlie', category: 'soldier', count: 4, imageUrl: `${BASE}/partyzanci-cyborg-charlie.jpg` },
    { id: 'part-provocateur', name: 'Provocateur', category: 'soldier', count: 3, imageUrl: `${BASE}/partyzanci-prowokatorka.jpg` },
    { id: 'part-gustav', name: 'Gustav 2.0', category: 'soldier', count: 2, imageUrl: `${BASE}/partyzanci-gustav-2.jpg` },
    { id: 'part-crazy-sid', name: 'Crazy Sid', category: 'soldier', count: 1, imageUrl: `${BASE}/partyzanci-szalony-sid.jpg` },

    // Modules
    { id: 'part-veteran-scout', name: 'Veteran Scout', category: 'module', count: 1, imageUrl: `${BASE}/partyzanci-zwiadowca-weteran.jpg` },
    { id: 'part-scout', name: 'Scout', category: 'module', count: 2, imageUrl: `${BASE}/partyzanci-zwiadowca.jpg` },
    { id: 'part-medic', name: 'Medic', category: 'module', count: 1, imageUrl: `${BASE}/partyzanci-medyk.jpg` },
    { id: 'part-driver', name: 'Driver', category: 'module', count: 1, imageUrl: `${BASE}/partyzanci-szofer.jpg` },
  ],
};
