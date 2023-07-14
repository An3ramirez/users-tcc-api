import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsString()
  @ApiProperty()
  last_name: string;

  @IsNumber()
  @ApiProperty()
  document_type_id: number;

  @IsNumber()
  @ApiProperty()
  document_number: number;

  @IsNumber()
  @ApiProperty()
  gender_id: number;
}
