import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from '../services/app.service';

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
    this.logger.log("Users");
    return 'Users';
  }
}
