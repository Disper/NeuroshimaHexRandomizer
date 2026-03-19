import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/deathbreath';

export const deathBreath: Army = {
  id: 'death-breath',
  name: 'Death Breath',
  color: '#0a0f14',
  accentColor: '#78716c',
  description:
    'A zombie horde that spreads infection across the board. Death Breath fields Infected, Grabbers, and Zombies, backed by Return and Castling tokens to recycle units. Eight Battle tokens make it one of the most combat-heavy armies.',
  hqAbility: 'All friendly adjacent units gain +1 melee attack strength.',
  hqImageUrl: `${BASE}/deathbreath-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'db-castling', name: 'Castling', category: 'instant', count: 1, imageUrl: `${BASE}/deathbreath-roszada.png` },
    { id: 'db-return', name: 'Return', category: 'instant', count: 2, imageUrl: `${BASE}/deathbreath-powrot.png` },
    { id: 'db-move', name: 'Move', category: 'instant', count: 3, imageUrl: `${BASE}/deathbreath-ruch.png` },
    { id: 'db-battle', name: 'Battle', category: 'instant', count: 8, imageUrl: `${BASE}/deathbreath-bitwa.png` },

    // Soldiers
    { id: 'db-infected', name: 'Infected', category: 'soldier', count: 3, imageUrl: `${BASE}/deathbreath-zarazony.png` },
    { id: 'db-grabber', name: 'Grabber', category: 'soldier', count: 3, imageUrl: `${BASE}/deathbreath-chwytacz.png` },
    { id: 'db-zombie', name: 'Zombie', category: 'soldier', count: 1, imageUrl: `${BASE}/deathbreath-zombiak.png` },
    { id: 'db-anomaly', name: 'Anomaly', category: 'soldier', count: 2, imageUrl: `${BASE}/deathbreath-anomalia.png` },
    { id: 'db-mutant', name: 'Mutant', category: 'soldier', count: 1, imageUrl: `${BASE}/deathbreath-mutant.png` },
    { id: 'db-corpse', name: 'Corpse', category: 'soldier', count: 1, imageUrl: `${BASE}/deathbreath-truposz.png` },
    { id: 'db-devourer', name: 'Devourer', category: 'soldier', count: 1, imageUrl: `${BASE}/deathbreath-pozeracz.png` },
    { id: 'db-beast', name: 'Beast', category: 'soldier', count: 1, imageUrl: `${BASE}/deathbreath-bestia.png` },

    // Modules
    { id: 'db-medic', name: 'Medic', category: 'module', count: 2, imageUrl: `${BASE}/deathbreath-medyk.png` },
    { id: 'db-officer', name: 'Officer', category: 'module', count: 2, imageUrl: `${BASE}/deathbreath-oficer.png` },
    { id: 'db-scout', name: 'Scout', category: 'module', count: 3, imageUrl: `${BASE}/deathbreath-zwiadowca.png` },
  ],
};
