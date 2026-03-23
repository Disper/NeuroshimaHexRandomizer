import { useState, useCallback, useMemo } from 'react';
import type { Army, TileCategory, TileDefinition } from '../data/types';
import type { TileInstance } from '../utils/deck';
import { buildDeck } from '../utils/deck';
import {
  WIREMEN_TECH_BONUS_LABELS,
  WIREMEN_TECH_BONUS_ORDER,
  wiremenTechBonusesFullDeck,
  wiremenTechBonusesRemaining,
} from '../utils/wiremenTechBonuses';
import { TileCard } from './TileCard';

const CATEGORY_ORDER: Record<TileCategory, number> = {
  hq: 0,
  instant: 1,
  soldier: 2,
  implant: 3,
  foundation: 4,
  module: 5,
};

const DECK_CATEGORIES: Exclude<TileCategory, 'hq'>[] = [
  'instant',
  'soldier',
  'implant',
  'foundation',
  'module',
];

const CATEGORY_LABELS: Record<Exclude<TileCategory, 'hq'>, string> = {
  instant: 'Instant',
  soldier: 'Soldier',
  implant: 'Implant',
  foundation: 'Foundation',
  module: 'Module',
};

const CATEGORY_STYLES: Record<Exclude<TileCategory, 'hq'>, string> = {
  instant: 'bg-red-950/60 border-red-500/30 text-red-400',
  soldier: 'bg-blue-950/60 border-blue-500/30 text-blue-400',
  implant: 'bg-violet-950/60 border-violet-500/30 text-violet-400',
  foundation: 'bg-slate-950/60 border-slate-500/30 text-slate-400',
  module: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400',
};

function sortByCategory(instances: TileInstance[]): TileInstance[] {
  return [...instances].sort(
    (a, b) => CATEGORY_ORDER[a.tile.category] - CATEGORY_ORDER[b.tile.category]
  );
}

/** Group instances by tile id; order of groups follows first occurrence in `instances`. */
function groupInstancesByTileId(instances: TileInstance[]): {
  tile: TileDefinition;
  instances: TileInstance[];
}[] {
  const byId = new Map<string, TileInstance[]>();
  const order: string[] = [];
  for (const inst of instances) {
    const id = inst.tile.id;
    if (!byId.has(id)) {
      byId.set(id, []);
      order.push(id);
    }
    byId.get(id)!.push(inst);
  }
  return order.map((id) => ({
    tile: byId.get(id)![0].tile,
    instances: byId.get(id)!,
  }));
}

function sortGroupsByCategory(
  groups: { tile: TileDefinition; instances: TileInstance[] }[]
): { tile: TileDefinition; instances: TileInstance[] }[] {
  return [...groups].sort((a, b) => {
    const oa = CATEGORY_ORDER[a.tile.category];
    const ob = CATEGORY_ORDER[b.tile.category];
    if (oa !== ob) return oa - ob;
    return a.tile.name.localeCompare(b.tile.name) || a.tile.id.localeCompare(b.tile.id);
  });
}

function countByCategory(instances: TileInstance[]): Record<Exclude<TileCategory, 'hq'>, number> {
  const counts = { instant: 0, soldier: 0, implant: 0, foundation: 0, module: 0 } as Record<
    Exclude<TileCategory, 'hq'>,
    number
  >;
  for (const inst of instances) {
    if (inst.tile.category !== 'hq') {
      counts[inst.tile.category]++;
    }
  }
  return counts;
}

/** Deck tile totals per category for this army (excludes HQ and excludeFromDeck). */
function deckTotalsByCategory(army: Army): Record<Exclude<TileCategory, 'hq'>, number> {
  const counts = { instant: 0, soldier: 0, implant: 0, foundation: 0, module: 0 } as Record<
    Exclude<TileCategory, 'hq'>,
    number
  >;
  for (const t of army.tiles) {
    if (t.excludeFromDeck || t.category === 'hq') continue;
    counts[t.category] += t.count;
  }
  return counts;
}

interface CounterModeProps {
  army: Army;
  onBack: () => void;
}

export function CounterMode({ army, onBack }: CounterModeProps) {
  const [remaining, setRemaining] = useState<TileInstance[]>(() => buildDeck(army));
  const [drawn, setDrawn] = useState<TileInstance[]>([]);
  const [stackIdentical, setStackIdentical] = useState(false);

  const handleRemainingClick = useCallback((instance: TileInstance) => {
    setRemaining((prev) => prev.filter((i) => i.instanceId !== instance.instanceId));
    setDrawn((prev) => [...prev, instance]);
  }, []);

  const handleDrawnClick = useCallback((instance: TileInstance) => {
    setDrawn((prev) => prev.filter((i) => i.instanceId !== instance.instanceId));
    setRemaining((prev) => [...prev, instance]);
  }, []);

  const handleReset = useCallback(() => {
    setRemaining(buildDeck(army));
    setDrawn([]);
  }, [army]);

  const totalTiles = remaining.length + drawn.length;
  const drawnCount = drawn.length;
  const remainingByCategory = countByCategory(remaining);
  const summaryCategories = useMemo(() => {
    const totals = deckTotalsByCategory(army);
    return DECK_CATEGORIES.filter((cat) => totals[cat] > 0);
  }, [army]);

  const wiremenTechRemaining = useMemo(
    () => (army.id === 'wiremen' ? wiremenTechBonusesRemaining(remaining) : null),
    [army.id, remaining]
  );
  const wiremenTechFull = useMemo(
    () => (army.id === 'wiremen' ? wiremenTechBonusesFullDeck() : null),
    [army.id]
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-colors text-sm font-medium"
        >
          ← Army List
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 text-stone-400 hover:text-red-400 transition-colors text-sm font-medium"
        >
          ↺ Reset
        </button>
      </div>

      {/* Summary */}
      <div
        className="rounded-2xl border border-stone-700 overflow-hidden p-6"
        style={{ background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)' }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold" style={{ color: army.accentColor }}>
            {army.name} — Tile Counter
          </h1>
          <div className="text-right">
            <span className="text-2xl font-bold text-stone-100">{drawnCount}</span>
            <span className="text-stone-500 text-sm"> / {totalTiles} drawn</span>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-2">
          Click a tile to move it between Remaining and Drawn.
        </p>

        <label className="mt-4 flex items-center gap-2.5 cursor-pointer select-none text-sm text-stone-300 hover:text-stone-100">
          <input
            type="checkbox"
            className="rounded border-stone-600 bg-stone-800 text-amber-600 focus:ring-amber-500/40 focus:ring-offset-0"
            checked={stackIdentical}
            onChange={(e) => setStackIdentical(e.target.checked)}
          />
          <span>Stack identical tiles</span>
        </label>
        <div className="flex flex-wrap gap-2 mt-4">
          {summaryCategories.map((cat) => (
            <span
              key={cat}
              className={`px-2.5 py-1 rounded border text-sm font-medium ${CATEGORY_STYLES[cat]}`}
            >
              {CATEGORY_LABELS[cat]}: {remainingByCategory[cat]} remaining
            </span>
          ))}
        </div>
      </div>

      {/* Drawn section */}
      {drawn.length > 0 && (
        <section>
          <h2 className="text-base font-semibold text-stone-400 mb-3">
            Drawn ({drawn.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {(stackIdentical
              ? sortGroupsByCategory(groupInstancesByTileId(drawn))
              : sortByCategory(drawn).map((instance) => ({
                  tile: instance.tile,
                  instances: [instance],
                }))
            ).map(({ tile, instances }) => (
              <TileCard
                key={instances.map((i) => i.instanceId).join('|')}
                tile={tile}
                count={instances.length}
                countInParentheses={stackIdentical && instances.length > 1}
                small
                onClick={() => handleDrawnClick(instances[0])}
              />
            ))}
          </div>
        </section>
      )}

      {/* Remaining section — grouped by category */}
      <section>
        <h2 className="text-base font-semibold text-stone-400 mb-3">
          Remaining ({remaining.length})
        </h2>
        {summaryCategories.map((cat) => {
          const tiles = remaining.filter((i) => i.tile.category === cat);
          if (tiles.length === 0) return null;
          return (
            <div key={cat} className="mb-6 last:mb-0">
              <h3
                className={`text-sm font-semibold mb-2 inline-flex items-center gap-2 px-2.5 py-1 rounded border ${CATEGORY_STYLES[cat]}`}
              >
                {CATEGORY_LABELS[cat]} — {tiles.length} remaining
              </h3>
              {cat === 'instant' && army.id === 'wiremen' && wiremenTechRemaining && wiremenTechFull && (
                <div className="mb-3 rounded-xl border border-teal-500/25 bg-teal-950/20 px-4 py-3">
                  <p className="text-teal-300/90 text-xs font-semibold uppercase tracking-wider mb-2">
                    Technology — remaining bonuses
                  </p>
                  <p className="text-stone-500 text-xs mb-3 leading-relaxed">
                    Total bonus pool from Technology (instant) tiles still in Remaining. Moving a tile to Drawn
                    reduces the bonuses it contributed.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {WIREMEN_TECH_BONUS_ORDER.map((key) => {
                      const cur = wiremenTechRemaining[key];
                      const max = wiremenTechFull[key];
                      if (max === 0) return null;
                      return (
                        <span
                          key={key}
                          className="inline-flex items-baseline gap-1 rounded-lg border border-teal-600/35 bg-stone-900/60 px-2.5 py-1.5 text-sm"
                        >
                          <span className="text-stone-300">{WIREMEN_TECH_BONUS_LABELS[key]}</span>
                          <span className="font-bold tabular-nums text-teal-200">{cur}</span>
                          <span className="text-stone-600 text-xs">/ {max}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                {(stackIdentical
                  ? sortGroupsByCategory(groupInstancesByTileId(tiles))
                  : tiles.map((instance) => ({
                      tile: instance.tile,
                      instances: [instance],
                    }))
                ).map(({ tile, instances }) => (
                  <TileCard
                    key={instances.map((i) => i.instanceId).join('|')}
                    tile={tile}
                    count={instances.length}
                    countInParentheses={stackIdentical && instances.length > 1}
                    small
                    onClick={() => handleRemainingClick(instances[0])}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
