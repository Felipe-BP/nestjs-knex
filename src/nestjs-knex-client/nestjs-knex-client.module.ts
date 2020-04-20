import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { NestjsKnexClientController } from './nestjs-knex-client.controller';
import { NestjsKnexModule } from '../nestjs-knex.module';

import knexConfigFile = require('./knex.config');

let config = null;
switch (process.env.NODE_ENV) {
    case 'development' : config = knexConfigFile.knexConfig.development; break;
    case 'test' : config = knexConfigFile.knexConfig.test; break;
    case 'stagging' : config = knexConfigFile.knexConfig.stagging; break;
    case 'production' : config = knexConfigFile.knexConfig.production; break;
    default: config = knexConfigFile.knexConfig.development;
}

@Module({
    controllers: [NestjsKnexClientController],
    imports: [NestjsKnexModule.register({
        client: 'pg',
        ...config,
    })],
})
export class NestjsKnexClientModule { }
