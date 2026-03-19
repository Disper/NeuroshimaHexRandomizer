import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/smart';

export const smart: Army = {
  id: 'smart',
  name: 'Smart',
  color: '#0a0f14',
  accentColor: '#06b6d4',
  description:
    'An AI-controlled army of robots, cyborgs, and bio-droids. Smart combines heavy firepower — Gauss Cannons, Golems, Rippers — with Terror tokens and strong module support. Few instants, but devastating when they strike.',
  hqAbility: 'All friendly adjacent units gain +1 armour.',
  hqImageUrl: `${BASE}/smart-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'smart-battle', name: 'Battle', category: 'instant', count: 4, imageUrl: `${BASE}/smart-bitwa.png` },
    { id: 'smart-push', name: 'Push', category: 'instant', count: 3, imageUrl: `${BASE}/smart-odepchniecie.png` },
    { id: 'smart-move', name: 'Move', category: 'instant', count: 1, imageUrl: `${BASE}/smart-ruch.png` },
    { id: 'smart-sniper', name: 'Sniper', category: 'instant', count: 1, imageUrl: `${BASE}/smart-snajper.png` },
    { id: 'smart-terror', name: 'Terror', category: 'instant', count: 2, imageUrl: `${BASE}/smart-terror.png` },

    // Soldiers
    { id: 'smart-ripper', name: 'Ripper', category: 'soldier', count: 1, imageUrl: `${BASE}/smart-rozpruwacz.png` },
    { id: 'smart-twister', name: 'Twister', category: 'soldier', count: 1, imageUrl: `${BASE}/smart-twister.png` },
    { id: 'smart-netter', name: 'Netter', category: 'soldier', count: 2, imageUrl: `${BASE}/smart-sieciarz.png` },
    { id: 'smart-gauss-cannon', name: 'Gauss Cannon', category: 'soldier', count: 3, imageUrl: `${BASE}/smart-dzialkogaussa.png` },
    { id: 'smart-golem-mk3', name: 'Golem MK3', category: 'soldier', count: 2, imageUrl: `${BASE}/smart-golemmk3.png` },
    { id: 'smart-cyborg', name: 'Cyborg', category: 'soldier', count: 2, imageUrl: `${BASE}/smart-cyborg.png` },
    { id: 'smart-bio-droid', name: 'Bio-droid', category: 'soldier', count: 1, imageUrl: `${BASE}/smart-biodroid.png` },

    // Modules
    { id: 'smart-transporter', name: 'Transporter', category: 'module', count: 3, imageUrl: `${BASE}/smart-transporter.png` },
    { id: 'smart-officer', name: 'Officer', category: 'module', count: 4, imageUrl: `${BASE}/smart-oficer.png` },
    { id: 'smart-mother', name: 'Mother', category: 'module', count: 2, imageUrl: `${BASE}/smart-matka.png` },
    { id: 'smart-scout', name: 'Scout', category: 'module', count: 2, imageUrl: `${BASE}/smart-zwiadowca.png` },
  ],
};
