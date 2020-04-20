// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import { NESTJS_KNEX_OPTIONS } from './constants';
import { NestjsKnexOptions } from './interfaces';

import Knex = require('knex');

interface INestjsKnexService {
    getKnexConnection(): Knex;
}

@Injectable()
export class NestjsKnexService implements INestjsKnexService {
    private readonly logger: Logger;
    private _knexConnection: any;

    constructor(
        @Inject(NESTJS_KNEX_OPTIONS) private _NestjsKnexOptions: NestjsKnexOptions,
    ) {
        this.logger = new Logger('NestjsKnexService');
        this.logger.log(`Setting up NestjsKnex Service`);
    }

    getKnexConnection(): Knex {
        if (!this._knexConnection) {
            this._knexConnection = new (Knex as any)(this._NestjsKnexOptions);
        }
        return this._knexConnection;
    }
}
