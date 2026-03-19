import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/doomsdaymachine';

export const doomsdayMachine: Army = {
  id: 'doomsday-machine',
  name: 'Doomsday Machine',
  color: '#0a0a0f',
  accentColor: '#64748b',
  description:
    'An autonomous war machine that deploys Shooter units — Alpha, Gamma, Delta, Omega — and Gauss Cannons. Doomsday Machine has five Medics, the most in the game, and relies on Fire Positions and Traps for area control.',
  hqAbility: 'All friendly adjacent units gain +1 armour.',
  hqImageUrl: `${BASE}/doomsdaymachine-sztab.png`,
  tiles: [
    // Instant tokens
    { id: 'ddm-battle', name: 'Battle', category: 'instant', count: 4, imageUrl: `${BASE}/doomsdaymachine-bitwa.png` },
    { id: 'ddm-push', name: 'Push', category: 'instant', count: 1, imageUrl: `${BASE}/doomsdaymachine-odepchniecie.png` },
    { id: 'ddm-small-bomb', name: 'Small Bomb', category: 'instant', count: 1, imageUrl: `${BASE}/doomsdaymachine-malabomba.png` },

    // Soldiers
    { id: 'ddm-shooter-alpha', name: 'Shooter Alpha', category: 'soldier', count: 2, imageUrl: `${BASE}/doomsdaymachine-strzelecalfa.png` },
    { id: 'ddm-gauss-cannon', name: 'Gauss Cannon', category: 'soldier', count: 2, imageUrl: `${BASE}/doomsdaymachine-dzialkogaussa.png` },
    { id: 'ddm-shooter-gamma', name: 'Shooter Gamma', category: 'soldier', count: 1, imageUrl: `${BASE}/doomsdaymachine-strzelecgamma.png` },
    { id: 'ddm-disintegrator', name: 'Disintegrator', category: 'soldier', count: 2, imageUrl: `${BASE}/doomsdaymachine-roztrajacz.png` },
    { id: 'ddm-shooter-delta', name: 'Shooter Delta', category: 'soldier', count: 1, imageUrl: `${BASE}/doomsdaymachine-strzelecdelta.png` },
    { id: 'ddm-shooter-omega', name: 'Shooter Omega', category: 'soldier', count: 4, imageUrl: `${BASE}/doomsdaymachine-strzelecomega.png` },
    { id: 'ddm-doom-netter', name: 'Doom Netter', category: 'soldier', count: 2, imageUrl: `${BASE}/doomsdaymachine-sieciarzzaglady.png` },
    { id: 'ddm-fire-position', name: 'Fire Position', category: 'soldier', count: 2, imageUrl: `${BASE}/doomsdaymachine-stanowiskoogniowe.png` },
    { id: 'ddm-trap', name: 'Trap', category: 'soldier', count: 1, imageUrl: `${BASE}/doomsdaymachine-pulapka.png` },

    // Modules
    { id: 'ddm-medic', name: 'Medic', category: 'module', count: 5, imageUrl: `${BASE}/doomsdaymachine-medyk.png` },
    { id: 'ddm-officer', name: 'Officer', category: 'module', count: 2, imageUrl: `${BASE}/doomsdaymachine-oficer.png` },
    { id: 'ddm-scout', name: 'Scout', category: 'module', count: 2, imageUrl: `${BASE}/doomsdaymachine-zwiadowca.png` },
    { id: 'ddm-main-processor', name: 'Main Combat Processor', category: 'module', count: 2, imageUrl: `${BASE}/doomsdaymachine-glownyprocesorbojowy.png` },
  ],
};
