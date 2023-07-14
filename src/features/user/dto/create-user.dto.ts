import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  document_type_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  document_number: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  gender_id: number;
}
