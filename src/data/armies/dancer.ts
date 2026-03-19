import type { Army } from '../types';

import imgObiektniebieski from '../../assets/dancer/dancer-obiektniebieski.png';
import imgAkcja from '../../assets/dancer/dancer-akcja.png';
import imgBitwa from '../../assets/dancer/dancer-bitwa.png';
import imgOdepchniecie from '../../assets/dancer/dancer-odepchniecie.png';
import imgRuch from '../../assets/dancer/dancer-ruch.png';
import imgObiektczerwony from '../../assets/dancer/dancer-obiektczerwony.png';
import imgObiektzolty from '../../assets/dancer/dancer-obiektzolty.png';

export const dancer: Army = {
  id: 'dancer',
  name: 'Dancer',
  color: '#0a0a1a',
  accentColor: '#8b5cf6',
  description:
    'An enigmatic faction built around three Objects — Blue, Red, and Yellow. Dancer has the highest instant token count in the game: massive stacks of Action, Battle, Push, and Move let it control the flow of play.',
  hqAbility: 'Blue Object — special rules apply.',
  hqImageUrl: imgObiektniebieski,
  tiles: [
    // Instant tokens
    { id: 'dancer-action', name: 'Action', category: 'instant', count: 7, imageUrl: imgAkcja },
    { id: 'dancer-battle', name: 'Battle', category: 'instant', count: 8, imageUrl: imgBitwa },
    { id: 'dancer-push', name: 'Push', category: 'instant', count: 7, imageUrl: imgOdepchniecie },
    { id: 'dancer-move', name: 'Move', category: 'instant', count: 10, imageUrl: imgRuch },

    // HQ Objects (placed separately, not in draw deck)
    { id: 'dancer-red-object', name: 'Red Object', category: 'hq', count: 1, imageUrl: imgObiektczerwony, excludeFromDeck: true },
    { id: 'dancer-yellow-object', name: 'Yellow Object', category: 'hq', count: 1, imageUrl: imgObiektzolty, excludeFromDeck: true },
  ],
};
