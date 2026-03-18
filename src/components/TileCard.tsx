import { useState } from 'react';
import type { TileDefinition, TileCategory } from '../data/types';

interface TileCardProps {
  tile: TileDefinition;
  /** Override displayed count (e.g. always show 1 for drawn instances) */
  count?: number;
  dimmed?: boolean;
  /** Compact mode for grids of many tiles */
  small?: boolean;
  onClick?: () => void;
}

const categoryConfig: Record<
  TileCategory,
  { label: string; border: string; badge: string; fallbackBg: string }
> = {
  hq: {
    label: 'HQ',
    border: 'border-amber-500/50',
    badge: 'bg-amber-500 text-amber-950',
    fallbackBg: 'bg-amber-950/60',
  },
  instant: {
    label: 'Instant',
    border: 'border-red-500/40',
    badge: 'bg-red-500 text-red-950',
    fallbackBg: 'bg-red-950/50',
  },
  soldier: {
    label: 'Soldier',
    border: 'border-blue-500/40',
    badge: 'bg-blue-500 text-blue-950',
    fallbackBg: 'bg-blue-950/50',
  },
  module: {
    label: 'Module',
    border: 'border-emerald-500/40',
    badge: 'bg-emerald-500 text-emerald-950',
    fallbackBg: 'bg-emerald-950/50',
  },
};

const categoryIcon: Record<TileCategory, string> = {
  hq: '🏛',
  instant: '⚡',
  soldier: '⚔',
  module: '⚙',
};

export function TileCard({ tile, count, dimmed, small, onClick }: TileCardProps) {
  const cfg = categoryConfig[tile.category];
  const displayCount = count ?? tile.count;
  const [imgError, setImgError] = useState(false);

  const hasImage = !!tile.imageUrl && !imgError;

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={[
        'relative rounded-xl border text-left transition-all duration-200 select-none overflow-hidden flex flex-col',
        cfg.border,
        'bg-stone-900',
        dimmed ? 'opacity-30 scale-95' : 'opacity-100 scale-100',
        onClick
          ? 'cursor-pointer hover:scale-105 hover:brightness-125 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30'
          : 'cursor-default',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Image area */}
      <div
        className={[
          'w-full flex items-center justify-center',
          hasImage ? '' : cfg.fallbackBg,
          small ? 'p-1' : 'p-2',
        ].join(' ')}
      >
        {hasImage ? (
          <img
            src={tile.imageUrl}
            alt={tile.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className={[
              'object-contain w-full',
              small ? 'h-20' : 'h-32',
            ].join(' ')}
          />
        ) : (
          <div
            className={[
              'flex items-center justify-center text-stone-400',
              small ? 'h-20 text-3xl' : 'h-32 text-5xl',
            ].join(' ')}
          >
            {categoryIcon[tile.category]}
          </div>
        )}
      </div>

      {/* Label bar */}
      <div className="px-2 py-1.5 flex items-center justify-between gap-1 border-t border-stone-700/60 bg-stone-950/60">
        <span
          className={[
            'font-semibold text-stone-100 leading-tight truncate',
            small ? 'text-xs' : 'text-sm',
          ].join(' ')}
        >
          {tile.name}
        </span>
        {displayCount > 1 && (
          <span
            className={[
              'shrink-0 rounded-full font-bold leading-none',
              cfg.badge,
              'text-xs px-1.5 py-0.5',
            ].join(' ')}
          >
            ×{displayCount}
          </span>
        )}
      </div>

      {/* Category badge — only on full size */}
      {!small && (
        <div className="px-2 pb-2">
          <span className={['text-xs font-medium rounded px-1.5 py-0.5', cfg.badge].join(' ')}>
            {cfg.label}
          </span>
        </div>
      )}
    </button>
  );
}
