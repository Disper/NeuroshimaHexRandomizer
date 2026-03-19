import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/sharrash';

export const sharrash: Army = {
  id: 'sharrash',
  name: 'Sharrash',
  color: '#14100a',
  accentColor: '#dc2626',
  description:
    'A chaotic underground faction of mutants, rats, and beasts. Sharrash floods the board with cheap units and explosives — Mortars, Demolition Charges, and Plague tokens create havoc while Mutants and Rats swarm the enemy.',
  hqAbility: 'All friendly adjacent units gain +1 melee attack strength.',
  hqImageUrl: `${BASE}/sharrash-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'sharrash-battle', name: 'Battle', category: 'instant', count: 5, imageUrl: `${BASE}/sharrash-bitwa.png` },
    { id: 'sharrash-move', name: 'Move', category: 'instant', count: 2, imageUrl: `${BASE}/sharrash-ruch.png` },
    { id: 'sharrash-paralysis', name: 'Paralysis', category: 'instant', count: 1, imageUrl: `${BASE}/sharrash-paraliz.png` },
    { id: 'sharrash-plague', name: 'Plague', category: 'instant', count: 2, imageUrl: `${BASE}/sharrash-plaga.png` },

    // Soldiers
    { id: 'sharrash-beast', name: 'Beast', category: 'soldier', count: 1, imageUrl: `${BASE}/sharrash-bestia.png` },
    { id: 'sharrash-mutant', name: 'Mutant', category: 'soldier', count: 3, imageUrl: `${BASE}/sharrash-mutant.png` },
    { id: 'sharrash-rats', name: 'Rats', category: 'soldier', count: 3, imageUrl: `${BASE}/sharrash-szczury.png` },
    { id: 'sharrash-mortar', name: 'Mortar', category: 'soldier', count: 3, imageUrl: `${BASE}/sharrash-mozdzierz.png` },
    { id: 'sharrash-demolition-charge', name: 'Demolition Charge', category: 'soldier', count: 4, imageUrl: `${BASE}/sharrash-ladunekwybuchowy.png` },
    { id: 'sharrash-underground', name: 'Underground', category: 'soldier', count: 1, imageUrl: `${BASE}/sharrash-podziemia.png` },
    { id: 'sharrash-dump', name: 'Dump', category: 'soldier', count: 1, imageUrl: `${BASE}/sharrash-smietnisko.png` },

    // Modules
    { id: 'sharrash-mother', name: 'Mother', category: 'module', count: 1, imageUrl: `${BASE}/sharrash-matka.png` },
    { id: 'sharrash-transport', name: 'Transport', category: 'module', count: 2, imageUrl: `${BASE}/sharrash-transport.png` },
    { id: 'sharrash-officer', name: 'Officer', category: 'module', count: 1, imageUrl: `${BASE}/sharrash-oficer.png` },
    { id: 'sharrash-medic', name: 'Medic', category: 'module', count: 2, imageUrl: `${BASE}/sharrash-medyk.png` },
    { id: 'sharrash-scout', name: 'Scout', category: 'module', count: 1, imageUrl: `${BASE}/sharrash-zwiadowca.png` },
    { id: 'sharrash-hole', name: 'Hole', category: 'module', count: 1, imageUrl: `${BASE}/sharrash-dziura.png` },
  ],
};
