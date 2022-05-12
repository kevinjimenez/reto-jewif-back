import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  balance: string;

  @IsNotEmpty()
  @IsString()
  avatar: string;
}

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {}

export class FilterProductDto {
  @IsNotEmpty()
  @IsPositive()
  limit: number;

  @IsNotEmpty()
  @Min(0)
  offset: number;

  @IsNotEmpty()
  @IsString()
  search: string;
}
