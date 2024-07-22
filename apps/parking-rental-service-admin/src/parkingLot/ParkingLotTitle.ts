import { ParkingLot as TParkingLot } from "../api/parkingLot/ParkingLot";

export const PARKINGLOT_TITLE_FIELD = "id";

export const ParkingLotTitle = (record: TParkingLot): string => {
  return record.id?.toString() || String(record.id);
};
