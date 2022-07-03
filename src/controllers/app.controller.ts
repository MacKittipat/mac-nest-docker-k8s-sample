import { Controller, ForbiddenException, Get, Logger } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { type } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly logger: Logger) {
  }

  @Get()
  getHello(): string {
    this.logger.log("Hello");
    return this.appService.getHello();
  }

  @Get('users')
  getUser(): string {
    this.logger.log("Getting users");
    throw new ForbiddenException("You don't have access to this endpoint");
    return 'Users';
  }

  @Get('products')
  getProduct(): string {
    this.logger.log("Getting products");
    throw new Error("Error when get products");
    return 'Products';
  }
}
