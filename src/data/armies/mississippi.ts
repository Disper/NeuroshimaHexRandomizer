import type { Army } from '../types';

import imgSztab from '../../assets/mississippi/missisipi-sztab.png';
import imgBitwa from '../../assets/mississippi/missisipi-bitwa.png';
import imgZaslonadymna from '../../assets/mississippi/missisipi-zaslonadymna.png';
import imgPodmiana from '../../assets/mississippi/missisipi-podmiana.png';
import imgOdepchniecie from '../../assets/mississippi/missisipi-odepchniecie.png';
import imgRuch from '../../assets/mississippi/missisipi-ruch.png';
import imgCien from '../../assets/mississippi/missisipi-cien.png';
import imgMutant from '../../assets/mississippi/missisipi-mutant.png';
import imgTruciciel from '../../assets/mississippi/missisipi-truciciel.png';
import imgStraznik from '../../assets/mississippi/missisipi-straznik.png';
import imgSkrytobojca from '../../assets/mississippi/missisipi-skrytobojca.png';
import imgSieciarz from '../../assets/mississippi/missisipi-sieciarz.png';
import imgParaliz from '../../assets/mississippi/missisipi-paraliz.png';
import imgMedyk from '../../assets/mississippi/missisipi-medyk.png';
import imgMutacja from '../../assets/mississippi/missisipi-mutacja.png';
import imgStrefa from '../../assets/mississippi/missisipi-strefa.png';
import imgBojler from '../../assets/mississippi/missisipi-bojler.png';
import imgToksycznabomba from '../../assets/mississippi/missisipi-toksycznabomba.png';

export const mississippi: Army = {
  id: 'mississippi',
  name: 'Mississippi',
  color: '#0f1a14',
  accentColor: '#14b8a6',
  description:
    'A toxic wasteland faction that thrives in polluted swamps and poisoned waters. Mississippi relies on stealth, poison, and area denial — Shadows, Poisoners, and Boilers control the board while Mutants and Guardians hold the line.',
  hqAbility: 'All friendly adjacent units gain +1 armour.',
  hqImageUrl: imgSztab,
  tiles: [
    // Instant tokens
    { id: 'ms-battle', name: 'Battle', category: 'instant', count: 4, imageUrl: imgBitwa },
    { id: 'ms-smoke-screen', name: 'Smoke Screen', category: 'instant', count: 1, imageUrl: imgZaslonadymna },
    { id: 'ms-swap', name: 'Swap', category: 'instant', count: 1, imageUrl: imgPodmiana },
    { id: 'ms-push', name: 'Push', category: 'instant', count: 1, imageUrl: imgOdepchniecie },
    { id: 'ms-move', name: 'Move', category: 'instant', count: 3, imageUrl: imgRuch },

    // Soldiers
    { id: 'ms-shadow', name: 'Shadow', category: 'soldier', count: 2, imageUrl: imgCien },
    { id: 'ms-mutant', name: 'Mutant', category: 'soldier', count: 3, imageUrl: imgMutant },
    { id: 'ms-poisoner', name: 'Poisoner', category: 'soldier', count: 2, imageUrl: imgTruciciel },
    { id: 'ms-guardian', name: 'Guardian', category: 'soldier', count: 4, imageUrl: imgStraznik },
    { id: 'ms-assassin', name: 'Assassin', category: 'soldier', count: 1, imageUrl: imgSkrytobojca },
    { id: 'ms-netter', name: 'Netter', category: 'soldier', count: 1, imageUrl: imgSieciarz },
    { id: 'ms-paralysis', name: 'Paralysis', category: 'soldier', count: 2, imageUrl: imgParaliz },

    // Modules
    { id: 'ms-medic', name: 'Medic', category: 'module', count: 2, imageUrl: imgMedyk },
    { id: 'ms-mutation', name: 'Mutation', category: 'module', count: 2, imageUrl: imgMutacja },
    { id: 'ms-zone', name: 'Zone', category: 'module', count: 1, imageUrl: imgStrefa },
    { id: 'ms-boiler', name: 'Boiler', category: 'module', count: 3, imageUrl: imgBojler },
    { id: 'ms-toxic-bomb', name: 'Toxic Bomb', category: 'module', count: 1, imageUrl: imgToksycznabomba },
  ],
};
