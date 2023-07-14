import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiNotFoundResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Validar estado del backend' })
  @ApiNotFoundResponse()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
