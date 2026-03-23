import type { TileInstance } from './deck';

/** Atomic Technology bonuses still available (from Technology instant tiles). */
export type WiremenTechBonusKey = 'ini0' | 'iniPlus1' | 'matka' | 'meleePlus1' | 'rangedPlus1';

export const WIREMEN_TECH_BONUS_LABELS: Record<WiremenTechBonusKey, string> = {
  ini0: 'Initiative 0',
  iniPlus1: 'Initiative +1',
  matka: 'Mother',
  meleePlus1: 'Melee attack +1',
  rangedPlus1: 'Ranged attack +1',
};

export const WIREMEN_TECH_BONUS_ORDER: WiremenTechBonusKey[] = [
  'ini0',
  'iniPlus1',
  'matka',
  'meleePlus1',
  'rangedPlus1',
];

/**
 * Per Technology tile (instant), which bonuses it still offers when in the deck.
 * Tile groups: Sniper, Castling ×2, Push ×3, Move ×4, Battle ×5.
 */
const BONUS_BY_TILE_ID: Record<string, Partial<Record<WiremenTechBonusKey, number>>> = {
  'wiremen-sniper': { ini0: 1 },
  'wiremen-castling-ini': { iniPlus1: 1 },
  'wiremen-castling-matka': { matka: 1 },
  'wiremen-push-cios': { meleePlus1: 1 },
  'wiremen-push-matka': { matka: 1 },
  'wiremen-push-strzal': { rangedPlus1: 1 },
  'wiremen-move-cios': { meleePlus1: 1 },
  'wiremen-move-ini': { iniPlus1: 1 },
  'wiremen-move-matka': { matka: 1 },
  'wiremen-move-strzal': { rangedPlus1: 1 },
  'wiremen-battle-cios-ini': { iniPlus1: 1, meleePlus1: 1 },
  'wiremen-battle-matka-cios': { matka: 1, meleePlus1: 1 },
  'wiremen-battle-matka-strzal': { matka: 1, rangedPlus1: 1 },
  'wiremen-battle-strzal-ini': { iniPlus1: 1, rangedPlus1: 1 },
  'wiremen-battle-zero-ini': { iniPlus1: 1, ini0: 1 },
};

const emptyBonuses = (): Record<WiremenTechBonusKey, number> => ({
  ini0: 0,
  iniPlus1: 0,
  matka: 0,
  meleePlus1: 0,
  rangedPlus1: 0,
});

/** Sum Technology bonuses from Wiremen instant tiles still in `remaining`. */
export function wiremenTechBonusesRemaining(remaining: TileInstance[]): Record<WiremenTechBonusKey, number> {
  const out = emptyBonuses();
  for (const inst of remaining) {
    if (inst.tile.category !== 'instant') continue;
    const add = BONUS_BY_TILE_ID[inst.tile.id];
    if (!add) continue;
    for (const key of WIREMEN_TECH_BONUS_ORDER) {
      const n = add[key];
      if (n) out[key] += n;
    }
  }
  return out;
}

/** Full-deck totals (all 15 Technology tiles in deck). */
export function wiremenTechBonusesFullDeck(): Record<WiremenTechBonusKey, number> {
  const out = emptyBonuses();
  for (const add of Object.values(BONUS_BY_TILE_ID)) {
    for (const key of WIREMEN_TECH_BONUS_ORDER) {
      const n = add[key];
      if (n) out[key] += n;
    }
  }
  return out;
}
