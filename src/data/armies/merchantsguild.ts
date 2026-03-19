import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/gildiakupcow';

export const merchantsGuild: Army = {
  id: 'merchants-guild',
  name: 'Merchants Guild',
  color: '#1a1408',
  accentColor: '#c2410c',
  description:
    'A wealthy trading faction that buys victory. Merchants Guild fields Paid Snipers, Black Market, Explosive Chris, and Kowalski — backed by Commanders, Chiefs, and the unique Gamble mechanic for high-risk, high-reward plays.',
  hqAbility: 'All friendly adjacent units gain +1 to ranged attack strength.',
  hqImageUrl: `${BASE}/gildiakupcow-sztab.jpg`,
  tiles: [
    // Instant tokens
    { id: 'mg-paid-sniper', name: 'Paid Sniper', category: 'instant', count: 1, imageUrl: `${BASE}/gildiakupcow-platny-snajper.jpg` },
    { id: 'mg-black-market', name: 'Black Market', category: 'instant', count: 1, imageUrl: `${BASE}/gildiakupcow-czarny-rynek.jpg` },
    { id: 'mg-move', name: 'Move', category: 'instant', count: 5, imageUrl: `${BASE}/gildiakupcow-ruch.jpg` },
    { id: 'mg-battle', name: 'Battle', category: 'instant', count: 2, imageUrl: `${BASE}/gildiakupcow-bitwa.jpg` },
    { id: 'mg-strategist', name: 'Strategist', category: 'instant', count: 1, imageUrl: `${BASE}/gildiakupcow-strateg.jpg` },

    // Soldiers
    { id: 'mg-briber', name: 'Briber', category: 'soldier', count: 1, imageUrl: `${BASE}/gildiakupcow-lapowkarz.jpg` },
    { id: 'mg-explosive-chris', name: 'Explosive Chris', category: 'soldier', count: 3, imageUrl: `${BASE}/gildiakupcow-wybuchowy-chris.jpg` },
    { id: 'mg-kowalski', name: 'Kowalski', category: 'soldier', count: 2, imageUrl: `${BASE}/gildiakupcow-kowalski.jpg` },
    { id: 'mg-black-box', name: 'Black Box', category: 'soldier', count: 2, imageUrl: `${BASE}/gildiakupcow-czarna-skrzynka.jpg` },
    { id: 'mg-risk-taker', name: 'Risk Taker', category: 'soldier', count: 1, imageUrl: `${BASE}/gildiakupcow-ryzykant.jpg` },
    { id: 'mg-squad-leader', name: 'Squad Leader', category: 'soldier', count: 2, imageUrl: `${BASE}/gildiakupcow-lider-zwiadu.jpg` },
    { id: 'mg-hacker', name: 'Hacker', category: 'soldier', count: 1, imageUrl: `${BASE}/gildiakupcow-hakerka.jpg` },
    { id: 'mg-tank', name: 'Tank', category: 'soldier', count: 1, imageUrl: `${BASE}/gildiakupcow-czolg.jpg` },
    { id: 'mg-road-pirate', name: 'Road Pirate', category: 'soldier', count: 2, imageUrl: `${BASE}/gildiakupcow-pirat-drogowy.jpg` },
    { id: 'mg-head-hunter', name: 'Head Hunter', category: 'soldier', count: 1, imageUrl: `${BASE}/gildiakupcow-lowczyni-glow.jpg` },
    { id: 'mg-turret', name: 'Turret', category: 'soldier', count: 1, imageUrl: `${BASE}/gildiakupcow-wiezyczka-z-fotokomorka.jpg` },

    // Modules
    { id: 'mg-scout', name: 'Scout', category: 'module', count: 1, imageUrl: `${BASE}/gildiakupcow-zwiadowca.jpg` },
    { id: 'mg-commander', name: 'Commander', category: 'module', count: 2, imageUrl: `${BASE}/gildiakupcow-komander.jpg` },
    { id: 'mg-chief', name: 'Chief', category: 'module', count: 4, imageUrl: `${BASE}/gildiakupcow-naczelnik.jpg` },
  ],
};
