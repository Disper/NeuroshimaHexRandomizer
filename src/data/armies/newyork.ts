import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/nowyjork';

export const newYork: Army = {
  id: 'new-york',
  name: 'New York',
  color: '#0f1419',
  accentColor: '#6366f1',
  description:
    'A hardened urban militia defending the ruins of the Big Apple. New York fields a mix of cops, snipers, and street fighters — strong ranged firepower backed by versatile modules and Mine tokens for area control.',
  hqAbility: 'All friendly adjacent units gain +1 to ranged attack strength.',
  hqImageUrl: `${BASE}/nowyjork-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'ny-battle', name: 'Battle', category: 'instant', count: 5, imageUrl: `${BASE}/nowyjork-bitwa.png` },
    { id: 'ny-move', name: 'Move', category: 'instant', count: 2, imageUrl: `${BASE}/nowyjork-ruch.png` },
    { id: 'ny-push', name: 'Push', category: 'instant', count: 1, imageUrl: `${BASE}/nowyjork-odepchniecie.png` },
    { id: 'ny-sniper', name: 'Sniper', category: 'instant', count: 1, imageUrl: `${BASE}/nowyjork-snajper.png` },

    // Soldiers
    { id: 'ny-shooter', name: 'Shooter', category: 'soldier', count: 1, imageUrl: `${BASE}/nowyjork-strzelec.png` },
    { id: 'ny-marksman', name: 'Marksman', category: 'soldier', count: 2, imageUrl: `${BASE}/nowyjork-strzelecwyborowy.png` },
    { id: 'ny-shotgun', name: 'Shotgun', category: 'soldier', count: 1, imageUrl: `${BASE}/nowyjork-shotgun.png` },
    { id: 'ny-spy-shooter', name: 'Spy Shooter', category: 'soldier', count: 2, imageUrl: `${BASE}/nowyjork-szpiegstrzelec.png` },
    { id: 'ny-rocket-launcher', name: 'Rocket Launcher', category: 'soldier', count: 1, imageUrl: `${BASE}/nowyjork-wyrzutniarakiet.png` },
    { id: 'ny-cop', name: 'Cop', category: 'soldier', count: 2, imageUrl: `${BASE}/nowyjork-gliniarz.png` },
    { id: 'ny-steel-boxer', name: 'Steel Boxer', category: 'soldier', count: 2, imageUrl: `${BASE}/nowyjork-stalowybokser.png` },
    { id: 'ny-hammer', name: 'Hammer', category: 'soldier', count: 2, imageUrl: `${BASE}/nowyjork-mlot.png` },
    { id: 'ny-pusher', name: 'Pusher', category: 'soldier', count: 1, imageUrl: `${BASE}/nowyjork-odpychacz.png` },
    { id: 'ny-spy-cleaner', name: 'Spy Cleaner', category: 'soldier', count: 1, imageUrl: `${BASE}/nowyjork-szpiegczysciciel.png` },
    { id: 'ny-netter', name: 'Netter', category: 'soldier', count: 1, imageUrl: `${BASE}/nowyjork-sieciarz.png` },

    // Modules
    { id: 'ny-sergeant', name: 'Sergeant', category: 'module', count: 1, imageUrl: `${BASE}/nowyjork-sierzant.png` },
    { id: 'ny-officer-1', name: 'Officer I', category: 'module', count: 2, imageUrl: `${BASE}/nowyjork-oficer1.png` },
    { id: 'ny-officer-2', name: 'Officer II', category: 'module', count: 2, imageUrl: `${BASE}/nowyjork-oficer2.png` },
    { id: 'ny-scout', name: 'Scout', category: 'module', count: 2, imageUrl: `${BASE}/nowyjork-zwiadowca.png` },
    { id: 'ny-mine', name: 'Mine', category: 'module', count: 2, imageUrl: `${BASE}/nowyjork-mina.png` },
  ],
};
