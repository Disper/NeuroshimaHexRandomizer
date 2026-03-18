import type { Army } from '../types';

const BASE = 'https://neuroshimahex.pl/gfx/uranopolis';

export const uranopolis: Army = {
  id: 'uranopolis',
  name: 'Uranopolis',
  color: '#1a0f2e',
  accentColor: '#a855f7',
  description:
    'A technologically advanced city-state whose citizens wield powerful generators and cutting-edge weaponry. Uranopolis units are fragile but pack devastating firepower, supported by a powerful array of modules.',
  hqAbility: 'Net — all friendly adjacent units gain +1 to all attacks.',
  hqImageUrl: `${BASE}/uranopolis-sztab.png`,
  tiles: [
    // Instant tokens
    {
      id: 'uranopolis-move',
      name: 'Move',
      category: 'instant',
      count: 1,
      imageUrl: `${BASE}/uranopolis-ruch.png`,
    },
    {
      id: 'uranopolis-battle',
      name: 'Battle',
      category: 'instant',
      count: 4,
      imageUrl: `${BASE}/uranopolis-bitwa.png`,
    },
    {
      id: 'uranopolis-push',
      name: 'Push',
      category: 'instant',
      count: 3,
      imageUrl: `${BASE}/uranopolis-odepchniecie.png`,
    },
    {
      id: 'uranopolis-ray',
      name: 'Ray',
      category: 'instant',
      count: 1,
      imageUrl: `${BASE}/uranopolis-promien.png`,
    },

    // Soldiers
    {
      id: 'uranopolis-electrowireman',
      name: 'Electrowireman',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/uranopolis-elektrosieciarz.png`,
    },
    {
      id: 'uranopolis-mechanic',
      name: 'Mechanic',
      category: 'soldier',
      count: 3,
      imageUrl: `${BASE}/uranopolis-mechanik.png`,
    },
    {
      id: 'uranopolis-inferno',
      name: 'Inferno',
      category: 'soldier',
      count: 4,
      imageUrl: `${BASE}/uranopolis-inferno.png`,
    },
    {
      id: 'uranopolis-bulldozer',
      name: 'Bulldozer',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/uranopolis-buldozer.png`,
    },
    {
      id: 'uranopolis-guardian',
      name: 'Guardian',
      category: 'soldier',
      count: 2,
      imageUrl: `${BASE}/uranopolis-straznik.png`,
    },
    {
      id: 'uranopolis-drill',
      name: 'Drill',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/uranopolis-swider.png`,
    },
    {
      id: 'uranopolis-hammerhead',
      name: 'Hammerhead',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/uranopolis-hammerhead.png`,
    },
    {
      id: 'uranopolis-demolisher',
      name: 'Demolisher',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/uranopolis-wyburzacz.png`,
    },
    {
      id: 'uranopolis-mercenary',
      name: 'Mercenary',
      category: 'soldier',
      count: 1,
      imageUrl: `${BASE}/uranopolis-najemnik.png`,
    },

    // Modules
    {
      id: 'uranopolis-speed-generator',
      name: 'Speed Generator',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/uranopolis-generatorprzyspieszajacy.png`,
    },
    {
      id: 'uranopolis-combat-generator',
      name: 'Combat Generator',
      category: 'module',
      count: 2,
      imageUrl: `${BASE}/uranopolis-generatorbojowy.png`,
    },
    {
      id: 'uranopolis-medic',
      name: 'Medic',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/uranopolis-medyk.png`,
    },
    {
      id: 'uranopolis-doubler',
      name: 'Doubler',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/uranopolis-podwajacz.png`,
    },
    {
      id: 'uranopolis-gauss-transformer',
      name: 'Gauss Transformer',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/uranopolis-transformatorgaussa.png`,
    },
    {
      id: 'uranopolis-transport',
      name: 'Transport',
      category: 'module',
      count: 2,
      imageUrl: `${BASE}/uranopolis-transport.png`,
    },
    {
      id: 'uranopolis-waste',
      name: 'Waste',
      category: 'module',
      count: 1,
      imageUrl: `${BASE}/uranopolis-odpady.png`,
    },
  ],
};
