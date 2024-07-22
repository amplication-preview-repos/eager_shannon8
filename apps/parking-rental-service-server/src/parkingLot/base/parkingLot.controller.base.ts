/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ParkingLotService } from "../parkingLot.service";
import { ParkingLotCreateInput } from "./ParkingLotCreateInput";
import { ParkingLot } from "./ParkingLot";
import { ParkingLotFindManyArgs } from "./ParkingLotFindManyArgs";
import { ParkingLotWhereUniqueInput } from "./ParkingLotWhereUniqueInput";
import { ParkingLotUpdateInput } from "./ParkingLotUpdateInput";

export class ParkingLotControllerBase {
  constructor(protected readonly service: ParkingLotService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ParkingLot })
  async createParkingLot(
    @common.Body() data: ParkingLotCreateInput
  ): Promise<ParkingLot> {
    return await this.service.createParkingLot({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ParkingLot] })
  @ApiNestedQuery(ParkingLotFindManyArgs)
  async parkingLots(@common.Req() request: Request): Promise<ParkingLot[]> {
    const args = plainToClass(ParkingLotFindManyArgs, request.query);
    return this.service.parkingLots({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ParkingLot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async parkingLot(
    @common.Param() params: ParkingLotWhereUniqueInput
  ): Promise<ParkingLot | null> {
    const result = await this.service.parkingLot({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ParkingLot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateParkingLot(
    @common.Param() params: ParkingLotWhereUniqueInput,
    @common.Body() data: ParkingLotUpdateInput
  ): Promise<ParkingLot | null> {
    try {
      return await this.service.updateParkingLot({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ParkingLot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteParkingLot(
    @common.Param() params: ParkingLotWhereUniqueInput
  ): Promise<ParkingLot | null> {
    try {
      return await this.service.deleteParkingLot({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
