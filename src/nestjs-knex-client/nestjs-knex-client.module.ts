import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { NestjsKnexClientController } from './nestjs-knex-client.controller';
import { NestjsKnexModule } from '../nestjs-knex.module';

import { knexConfig } from './knex.config';
import { EnvConfig } from '../interfaces/nestjs-knex-options.interface';

const config: EnvConfig = knexConfig[process.env.NODE_ENV ?? 'development'];

@Module({
    controllers: [NestjsKnexClientController],
    imports: [NestjsKnexModule.register({
        client: 'pg',
        ...config,
    })],
})
export class NestjsKnexClientModule { }
