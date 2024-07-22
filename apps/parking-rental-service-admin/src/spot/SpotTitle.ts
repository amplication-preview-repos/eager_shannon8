import { Spot as TSpot } from "../api/spot/Spot";

export const SPOT_TITLE_FIELD = "id";

export const SpotTitle = (record: TSpot): string => {
  return record.id?.toString() || String(record.id);
};
