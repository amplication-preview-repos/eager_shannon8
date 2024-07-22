/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RentalWhereInput } from "./RentalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RentalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RentalWhereInput,
  })
  @ValidateNested()
  @Type(() => RentalWhereInput)
  @IsOptional()
  @Field(() => RentalWhereInput, {
    nullable: true,
  })
  every?: RentalWhereInput;

  @ApiProperty({
    required: false,
    type: () => RentalWhereInput,
  })
  @ValidateNested()
  @Type(() => RentalWhereInput)
  @IsOptional()
  @Field(() => RentalWhereInput, {
    nullable: true,
  })
  some?: RentalWhereInput;

  @ApiProperty({
    required: false,
    type: () => RentalWhereInput,
  })
  @ValidateNested()
  @Type(() => RentalWhereInput)
  @IsOptional()
  @Field(() => RentalWhereInput, {
    nullable: true,
  })
  none?: RentalWhereInput;
}
export { RentalListRelationFilter as RentalListRelationFilter };
