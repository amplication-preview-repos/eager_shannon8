import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParkingLotService } from "./parkingLot.service";
import { ParkingLotControllerBase } from "./base/parkingLot.controller.base";

@swagger.ApiTags("parkingLots")
@common.Controller("parkingLots")
export class ParkingLotController extends ParkingLotControllerBase {
  constructor(protected readonly service: ParkingLotService) {
    super(service);
  }
}
