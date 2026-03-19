import { moloch } from './moloch';
import { wiremen } from './wiremen';
import { uranopolis } from './uranopolis';
import { steelPolice } from './steelpolice';
import { beasts } from './beasts';
import { mephisto } from './mephisto';
import { pirates } from './pirates';
import { borgo } from './borgo';
import { outpost } from './outpost';
import { hegemony } from './hegemony';
import { mississippi } from './mississippi';
import { newYork } from './newyork';
import { smart } from './smart';
import { neojungle } from './neojungle';
import { vegas } from './vegas';
import { dancer } from './dancer';
import { sharrash } from './sharrash';
import { sandRunners } from './sandrunners';
import { ironGang } from './irongang';
import { desertPeople } from './desertpeople';
import { troglodytes } from './troglodytes';
import { partisans } from './partisans';
import { merchantsGuild } from './merchantsguild';
import { deathBreath } from './deathbreath';
import { doomsdayMachine } from './doomsdaymachine';
import type { Army } from '../types';

export const armies: Army[] = [
  moloch, wiremen, uranopolis, steelPolice,
  beasts, mephisto, pirates,
  borgo, outpost, hegemony, mississippi,
  newYork, smart, neojungle, vegas, dancer, sharrash,
  sandRunners, ironGang, desertPeople,
  troglodytes, partisans, merchantsGuild, deathBreath, doomsdayMachine,
];

export const getArmy = (id: string): Army | undefined =>
  armies.find((a) => a.id === id);
