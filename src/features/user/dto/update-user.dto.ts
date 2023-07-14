import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsNumber()
  @ApiProperty()
  documentType: number;

  @IsNumber()
  @ApiProperty()
  documentNumber: number;

  @IsNumber()
  @ApiProperty()
  gender: number;
}
