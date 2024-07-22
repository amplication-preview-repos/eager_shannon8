import { Module } from "@nestjs/common";
import { ParkingLotModuleBase } from "./base/parkingLot.module.base";
import { ParkingLotService } from "./parkingLot.service";
import { ParkingLotController } from "./parkingLot.controller";
import { ParkingLotResolver } from "./parkingLot.resolver";

@Module({
  imports: [ParkingLotModuleBase],
  controllers: [ParkingLotController],
  providers: [ParkingLotService, ParkingLotResolver],
  exports: [ParkingLotService],
})
export class ParkingLotModule {}
