import { ParkingLotWhereInput } from "./ParkingLotWhereInput";
import { ParkingLotOrderByInput } from "./ParkingLotOrderByInput";

export type ParkingLotFindManyArgs = {
  where?: ParkingLotWhereInput;
  orderBy?: Array<ParkingLotOrderByInput>;
  skip?: number;
  take?: number;
};
