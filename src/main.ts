import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { transports } from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      level: 'info',
      defaultMeta: { app: 'mac-nest-web' },
      transports: [
        new transports.Console(),
      ],
    }),
  });
  await app.listen(3000);
}
bootstrap();
