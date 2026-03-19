import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/ludziepustyni';

export const desertPeople: Army = {
  id: 'desert-people',
  name: 'Desert Tribes',
  color: '#1a1408',
  accentColor: '#e5c07b',
  description:
    'Tribal warriors of the wasteland who blend stealth, ranged combat, and shamanic support. Desert People field Coyotes, Archers, Young Warriors, and Shamans — a versatile mix of scouts and fighters backed by Mirage tokens.',
  hqAbility: 'All friendly adjacent units gain +1 to ranged attack strength.',
  hqImageUrl: `${BASE}/ludziepustyni-sztab.jpg`,
  tiles: [
    // Instant tokens
    { id: 'dp-battle', name: 'Battle', category: 'instant', count: 5, imageUrl: `${BASE}/ludziepustyni-bitwa.jpg` },
    { id: 'dp-move', name: 'Move', category: 'instant', count: 4, imageUrl: `${BASE}/ludziepustyni-ruch.jpg` },
    { id: 'dp-mirage', name: 'Mirage', category: 'instant', count: 2, imageUrl: `${BASE}/ludziepustyni-miraz.jpg` },

    // Soldiers
    { id: 'dp-scalpel', name: 'Scalpel', category: 'soldier', count: 1, imageUrl: `${BASE}/ludziepustyni-skalpel.jpg` },
    { id: 'dp-coyote', name: 'Coyote', category: 'soldier', count: 2, imageUrl: `${BASE}/ludziepustyni-kojot.jpg` },
    { id: 'dp-archer', name: 'Archer', category: 'soldier', count: 2, imageUrl: `${BASE}/ludziepustyni-lucznik.jpg` },
    { id: 'dp-young-warriors', name: 'Young Warriors', category: 'soldier', count: 2, imageUrl: `${BASE}/ludziepustyni-mlodzi-wojownicy.jpg` },
    { id: 'dp-tracker', name: 'Tracker', category: 'soldier', count: 2, imageUrl: `${BASE}/ludziepustyni-tropiciel.jpg` },
    { id: 'dp-rattlesnake', name: 'Rattlesnake', category: 'soldier', count: 1, imageUrl: `${BASE}/ludziepustyni-grzechotnik.jpg` },
    { id: 'dp-worm-clan-warrior', name: 'Worm Clan Warrior', category: 'soldier', count: 3, imageUrl: `${BASE}/ludziepustyni-wojownik-klanu-czerwia.jpg` },
    { id: 'dp-spearman', name: 'Spearman', category: 'soldier', count: 2, imageUrl: `${BASE}/ludziepustyni-grotnik.jpg` },
    { id: 'dp-hideout', name: 'Hideout', category: 'soldier', count: 1, imageUrl: `${BASE}/ludziepustyni-kryjowka.jpg` },

    // Modules
    { id: 'dp-shaman', name: 'Shaman', category: 'module', count: 3, imageUrl: `${BASE}/ludziepustyni-szamanka.jpg` },
    { id: 'dp-officer', name: 'Officer', category: 'module', count: 2, imageUrl: `${BASE}/ludziepustyni-oficer.jpg` },
    { id: 'dp-scout', name: 'Scout', category: 'module', count: 2, imageUrl: `${BASE}/ludziepustyni-zwiadowca.jpg` },
  ],
};
