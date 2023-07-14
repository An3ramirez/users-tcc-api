import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto, CreateUserDto } from './dto';

@Controller('user')
@ApiTags('Usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Retorna todos los usuarios' })
  @ApiOkResponse({ type: UserEntity, isArray: true })
  @ApiNotFoundResponse()
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Obtiene un usuario específico por su ID' })
  @ApiOkResponse({ type: UserEntity })
  @ApiNotFoundResponse()
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @ApiOperation({ summary: 'Crea un nuevo usuario' })
  @ApiCreatedResponse({ type: UserEntity })
  @ApiNotFoundResponse()
  @Post()
  create(@Body() createUserData: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserData);
  }

  @ApiOperation({ summary: 'Actualiza un usuario existente por su ID' })
  @ApiOkResponse({ type: UserEntity })
  @ApiNotFoundResponse()
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Elimina un usurio existente por su ID' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
