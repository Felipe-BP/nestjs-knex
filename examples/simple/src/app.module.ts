import { Module } from '@nestjs/common';
import { NestjsKnexModule } from 'nestjs-knexjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { config } from './database/config';

@Module({
  imports: [
    NestjsKnexModule.forRoot({
      client: 'pg',
      ...config,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
