import { Module } from '@nestjs/common';
import { NestjsKnexModule } from 'nestjs-knexjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { catConfig, albumConfig } from './database/config';

@Module({
  imports: [
    NestjsKnexModule.forRoot(catConfig),
    NestjsKnexModule.forRoot(albumConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
