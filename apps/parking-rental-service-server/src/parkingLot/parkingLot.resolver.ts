import * as graphql from "@nestjs/graphql";
import { ParkingLotResolverBase } from "./base/parkingLot.resolver.base";
import { ParkingLot } from "./base/ParkingLot";
import { ParkingLotService } from "./parkingLot.service";

@graphql.Resolver(() => ParkingLot)
export class ParkingLotResolver extends ParkingLotResolverBase {
  constructor(protected readonly service: ParkingLotService) {
    super(service);
  }
}
