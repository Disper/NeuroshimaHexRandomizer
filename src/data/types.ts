export type TileCategory =
  | 'hq'
  | 'instant'
  | 'soldier'
  | 'implant'
  | 'foundation'
  | 'module';

export interface TileDefinition {
  id: string;
  name: string;
  category: TileCategory;
  count: number;
  description?: string;
  imageUrl?: string;
  /** If set with imageUrl, image is shown very dark with this label centered (e.g. Merchants Guild Reconnaissance) */
  imageOverlayLabel?: string;
  /** If true, tile is shown in army list but excluded from the draw deck */
  excludeFromDeck?: boolean;
  /** If true, tile is shown next to HQ in the army view (not in its category section) */
  displayWithHq?: boolean;
}

export interface Army {
  id: string;
  name: string;
  color: string;
  accentColor: string;
  description: string;
  hqAbility: string;
  hqImageUrl?: string;
  /**
   * When true, Headquarters shows only `tiles` with category `hq` (three Dancer Objects, etc.),
   * not the synthetic single-HQ card.
   */
  multiHeadquarters?: boolean;
  tiles: TileDefinition[];
}

export interface DrawnTile {
  instanceId: string;
  tile: TileDefinition;
  armyId: string;
  drawnAt: number;
}
