import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParkingLotServiceBase } from "./base/parkingLot.service.base";

@Injectable()
export class ParkingLotService extends ParkingLotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
