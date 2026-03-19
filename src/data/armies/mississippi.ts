import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/missisipi';

export const mississippi: Army = {
  id: 'mississippi',
  name: 'Mississippi',
  color: '#0f1a14',
  accentColor: '#14b8a6',
  description:
    'A toxic wasteland faction that thrives in polluted swamps and poisoned waters. Mississippi relies on stealth, poison, and area denial — Shadows, Poisoners, and Boilers control the board while Mutants and Guardians hold the line.',
  hqAbility: 'All friendly adjacent units gain +1 armour.',
  hqImageUrl: `${BASE}/missisipi-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'ms-battle', name: 'Battle', category: 'instant', count: 4, imageUrl: `${BASE}/missisipi-bitwa.png` },
    { id: 'ms-smoke-screen', name: 'Smoke Screen', category: 'instant', count: 1, imageUrl: `${BASE}/missisipi-zaslonadymna.png` },
    { id: 'ms-swap', name: 'Swap', category: 'instant', count: 1, imageUrl: `${BASE}/missisipi-podmiana.png` },
    { id: 'ms-push', name: 'Push', category: 'instant', count: 1, imageUrl: `${BASE}/missisipi-odepchniecie.png` },
    { id: 'ms-move', name: 'Move', category: 'instant', count: 3, imageUrl: `${BASE}/missisipi-ruch.png` },

    // Soldiers
    { id: 'ms-shadow', name: 'Shadow', category: 'soldier', count: 2, imageUrl: `${BASE}/missisipi-cien.png` },
    { id: 'ms-mutant', name: 'Mutant', category: 'soldier', count: 3, imageUrl: `${BASE}/missisipi-mutant.png` },
    { id: 'ms-poisoner', name: 'Poisoner', category: 'soldier', count: 2, imageUrl: `${BASE}/missisipi-truciciel.png` },
    { id: 'ms-guardian', name: 'Guardian', category: 'soldier', count: 4, imageUrl: `${BASE}/missisipi-straznik.png` },
    { id: 'ms-assassin', name: 'Assassin', category: 'soldier', count: 1, imageUrl: `${BASE}/missisipi-skrytobojca.png` },
    { id: 'ms-netter', name: 'Netter', category: 'soldier', count: 1, imageUrl: `${BASE}/missisipi-sieciarz.png` },
    { id: 'ms-paralysis', name: 'Paralysis', category: 'soldier', count: 2, imageUrl: `${BASE}/missisipi-paraliz.png` },

    // Modules
    { id: 'ms-medic', name: 'Medic', category: 'module', count: 2, imageUrl: `${BASE}/missisipi-medyk.png` },
    { id: 'ms-mutation', name: 'Mutation', category: 'module', count: 2, imageUrl: `${BASE}/missisipi-mutacja.png` },
    { id: 'ms-zone', name: 'Zone', category: 'module', count: 1, imageUrl: `${BASE}/missisipi-strefa.png` },
    { id: 'ms-boiler', name: 'Boiler', category: 'module', count: 3, imageUrl: `${BASE}/missisipi-bojler.png` },
    { id: 'ms-toxic-bomb', name: 'Toxic Bomb', category: 'module', count: 1, imageUrl: `${BASE}/missisipi-toksycznabomba.png` },
  ],
};
