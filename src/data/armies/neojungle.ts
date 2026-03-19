import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/neodzungla';

export const neojungle: Army = {
  id: 'neojungle',
  name: 'Neojungle',
  color: '#0d1a0d',
  accentColor: '#22c55e',
  description:
    'A mutated jungle that has reclaimed the wasteland. Neojungle fights with monstrous creatures, poison, and living terrain — Rippers, Poisoners, and Tree Walls control the board while Symbionts and Roots provide support.',
  hqAbility: 'All friendly adjacent units gain +1 armour.',
  hqImageUrl: `${BASE}/neodzungla-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'nj-battle', name: 'Battle', category: 'instant', count: 4, imageUrl: `${BASE}/neodzungla-bitwa.png` },
    { id: 'nj-castling', name: 'Castling', category: 'instant', count: 2, imageUrl: `${BASE}/neodzungla-roszada.png` },
    { id: 'nj-move', name: 'Move', category: 'instant', count: 1, imageUrl: `${BASE}/neodzungla-ruch.png` },
    { id: 'nj-small-bomb', name: 'Small Bomb', category: 'instant', count: 1, imageUrl: `${BASE}/neodzungla-malabomba.png` },

    // Soldiers
    { id: 'nj-monster', name: 'Monster', category: 'soldier', count: 1, imageUrl: `${BASE}/neodzungla-monstrum.png` },
    { id: 'nj-ripper', name: 'Ripper', category: 'soldier', count: 4, imageUrl: `${BASE}/neodzungla-rozkrajacz.png` },
    { id: 'nj-poisoner', name: 'Poisoner', category: 'soldier', count: 2, imageUrl: `${BASE}/neodzungla-truciciel.png` },
    { id: 'nj-crusher', name: 'Crusher', category: 'soldier', count: 3, imageUrl: `${BASE}/neodzungla-miazdzyciel.png` },
    { id: 'nj-tree-wall', name: 'Tree Wall', category: 'soldier', count: 1, imageUrl: `${BASE}/neodzungla-scianadrzew.png` },
    { id: 'nj-netter', name: 'Netter', category: 'soldier', count: 3, imageUrl: `${BASE}/neodzungla-sieciarz.png` },
    { id: 'nj-tangle', name: 'Tangle', category: 'soldier', count: 2, imageUrl: `${BASE}/neodzungla-klebowisko.png` },
    { id: 'nj-vine', name: 'Vine', category: 'soldier', count: 1, imageUrl: `${BASE}/neodzungla-pnacza.png` },

    // Modules
    { id: 'nj-medic', name: 'Medic', category: 'module', count: 3, imageUrl: `${BASE}/neodzungla-medyk.png` },
    { id: 'nj-symbiont-alpha', name: 'Symbiont Alpha', category: 'module', count: 1, imageUrl: `${BASE}/neodzungla-symbiontalfa.png` },
    { id: 'nj-symbiont-beta', name: 'Symbiont Beta', category: 'module', count: 1, imageUrl: `${BASE}/neodzungla-symbiontbeta.png` },
    { id: 'nj-symbiont-gamma', name: 'Symbiont Gamma', category: 'module', count: 2, imageUrl: `${BASE}/neodzungla-symbiontgamma.png` },
    { id: 'nj-root', name: 'Root', category: 'module', count: 2, imageUrl: `${BASE}/neodzungla-korzen.png` },
  ],
};
