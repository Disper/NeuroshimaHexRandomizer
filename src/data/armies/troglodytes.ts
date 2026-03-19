import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/troglodyci';

export const troglodytes: Army = {
  id: 'troglodytes',
  name: 'Troglodytes',
  color: '#0a1414',
  accentColor: '#67e8f9',
  description:
    'Cave-dwelling mutants adapted to cold and darkness. Troglodytes field Bears, Archers, Ice Monkeys, and the unique Satiety system — Lungs, Claws, Eyes, Fangs, Muscles, and Heart tiles that grow stronger as the battle progresses.',
  hqAbility: 'All friendly adjacent units gain +1 armour.',
  hqImageUrl: `${BASE}/troglodyci-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'trog-battle', name: 'Battle', category: 'instant', count: 7, imageUrl: `${BASE}/troglodyci-bitwa.png` },
    { id: 'trog-move', name: 'Move', category: 'instant', count: 3, imageUrl: `${BASE}/troglodyci-ruch.png` },
    { id: 'trog-avalanche', name: 'Avalanche', category: 'instant', count: 1, imageUrl: `${BASE}/troglodyci-lawina.png` },
    { id: 'trog-cannibalize', name: 'Cannibalize Enemy', category: 'instant', count: 1, imageUrl: `${BASE}/troglodyci-skanibalizowanie-wroga.png` },
    { id: 'trog-frost', name: 'Frost', category: 'instant', count: 2, imageUrl: `${BASE}/troglodyci-frost.png` },

    // Soldiers
    { id: 'trog-archer', name: 'Archer', category: 'soldier', count: 2, imageUrl: `${BASE}/troglodyci-lucznik.png` },
    { id: 'trog-tundra', name: 'Tundra', category: 'soldier', count: 4, imageUrl: `${BASE}/troglodyci-tundra.png` },
    { id: 'trog-icicle', name: 'Icicle', category: 'soldier', count: 5, imageUrl: `${BASE}/troglodyci-sopel.png` },
    { id: 'trog-bear', name: 'Bear', category: 'soldier', count: 3, imageUrl: `${BASE}/troglodyci-niedzwiedz.png` },
    { id: 'trog-frost-matron', name: 'Frost Matron', category: 'soldier', count: 2, imageUrl: `${BASE}/troglodyci-mrozna-matrona.png` },
    { id: 'trog-ice-monkey', name: 'Ice Monkey', category: 'soldier', count: 2, imageUrl: `${BASE}/troglodyci-lodowa-malpa.png` },
    { id: 'trog-kids', name: 'Kids', category: 'soldier', count: 2, imageUrl: `${BASE}/troglodyci-dzieciaki.png` },

    // Modules (Satiety tiles)
    { id: 'trog-lungs', name: 'Lungs', category: 'module', count: 3, imageUrl: `${BASE}/troglodyci-pluca.png` },
    { id: 'trog-claws', name: 'Claws', category: 'module', count: 3, imageUrl: `${BASE}/troglodyci-pazury.png` },
    { id: 'trog-eyes', name: 'Eyes', category: 'module', count: 1, imageUrl: `${BASE}/troglodyci-oczy.png` },
    { id: 'trog-fangs', name: 'Fangs', category: 'module', count: 1, imageUrl: `${BASE}/troglodyci-kly.png` },
    { id: 'trog-muscles', name: 'Muscles', category: 'module', count: 1, imageUrl: `${BASE}/troglodyci-miesnie.png` },
    { id: 'trog-heart', name: 'Heart', category: 'module', count: 1, imageUrl: `${BASE}/troglodyci-serce.png` },
  ],
};
