import { Type } from 'class-transformer';
import { IsInt, IsObject, IsOptional, IsPositive } from 'class-validator';

export class QueryParamsDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset: number = 0;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  limit: number = 10;

  @IsOptional()
  @IsObject()
  filter?: object;

  @IsOptional()
  @IsObject()
  sort?: object;
}
