import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/moloch';

export const moloch: Army = {
  id: 'moloch',
  name: 'Moloch',
  color: '#1e293b',
  accentColor: '#f97316',
  description:
    'A mechano-electronic entity spanning several states. After 30 years it is larger and more powerful than ever, sending machine armies across the wasteland. Strong and durable, but slow and with few Battle tokens.',
  hqAbility: '+1 to ranged attack strength for all adjacent friendly units.',
  hqImageUrl: `${BASE}/moloch-sztab.png`,
  tiles: [
    // Instant tokens
    {
      id: 'moloch-battle',
      name: 'Battle',
      category: 'instant',
      count: 4,
      imageUrl: `${BASE}/moloch-bitwa.png`,
    },
    {
      id: 'moloch-move',
      name: 'Move',
      category: 'instant',
      count: 1,
      imageUrl: `${BASE}/moloch-ruch.png`,
    },
    {
      id: 'moloch-push',
      name: 'Push',
      category: 'instant',
      count: 5,
      imageUrl: `${BASE}/moloch-odepchniecie.png`,
    },
    {
      id: 'moloch-bomb',
      name: 'Bomb',
      category: 'instant',
      count: 1,
      imageUrl: `${BASE}/moloch-bomba.png`,
    },

    // Soldiers
    {
      id: 'moloch-blocker',
      name: 'Blocker',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/moloch-bloker.png`,
    },
    {
      id: 'moloch-cyborg',
      name: 'Cyborg',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/moloch-cyborg.png`,
    },
    {
      id: 'moloch-gauss-cannon',
      name: 'Gauss Cannon',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-dzialkogaussa.png`,
    },
    {
      id: 'moloch-juggernaut',
      name: 'Juggernaut',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-juggernaut.png`,
    },
    {
      id: 'moloch-clown',
      name: 'Clown',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-klaun.png`,
    },
    {
      id: 'moloch-hunter',
      name: 'Hunter',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/moloch-lowca.png`,
    },
    {
      id: 'moloch-defender',
      name: 'Defender',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-obronca.png`,
    },
    {
      id: 'moloch-armored-hunter',
      name: 'Armored Hunter',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/moloch-opancerzonylowca.png`,
    },
    {
      id: 'moloch-armored-sentry',
      name: 'Armored Sentry',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-opancerzonywartownik.png`,
    },
    {
      id: 'moloch-ripper',
      name: 'Ripper',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-rozpruwacz.png`,
    },
    {
      id: 'moloch-netter',
      name: 'Netter',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-sieciarz.png`,
    },
    {
      id: 'moloch-assault',
      name: 'Assault Bot',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-szturmowiec.png`,
    },
    {
      id: 'moloch-sentry',
      name: 'Sentry',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/moloch-wartownik.png`,
    },

    // Modules
    {
      id: 'moloch-brain',
      name: 'Brain',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/moloch-mozg.png`,
    },
    {
      id: 'moloch-officer',
      name: 'Officer',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/moloch-oficer.png`,
    },
    {
      id: 'moloch-scout',
      name: 'Scout',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/moloch-zwiadowca.png`,
    },
    {
      id: 'moloch-medic',
      name: 'Medic',
      category: 'module',
      count: 2,
      imageUrl: `${BASE}/moloch-medyk.png`,
    },
    {
      id: 'moloch-mother',
      name: 'Mother',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/moloch-matka.png`,
    },
  ],
};
