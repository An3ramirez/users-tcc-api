import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  documentType: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  documentNumber: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  gender: number;
}
