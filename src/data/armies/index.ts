import { moloch } from './moloch';
import { wiremen } from './wiremen';
import { uranopolis } from './uranopolis';
import type { Army } from '../types';

export const armies: Army[] = [moloch, wiremen, uranopolis];

export const getArmy = (id: string): Army | undefined =>
  armies.find((a) => a.id === id);
