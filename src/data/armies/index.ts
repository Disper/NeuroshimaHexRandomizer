import { moloch } from './moloch';
import { wiremen } from './wiremen';
import type { Army } from '../types';

export const armies: Army[] = [moloch, wiremen];

export const getArmy = (id: string): Army | undefined =>
  armies.find((a) => a.id === id);
