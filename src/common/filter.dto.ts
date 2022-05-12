import { IsIn, IsOptional } from 'class-validator';

export class FilterDto {
  @IsOptional()
  @IsIn([0, 1])
  estado: 0 | 1;
}