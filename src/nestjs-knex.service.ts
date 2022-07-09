import { Injectable, Inject, Logger } from '@nestjs/common';
import { NESTJS_KNEX_OPTIONS } from './constants';
import { NestjsKnexOptions } from './interfaces';

import { Knex, knex } from 'knex';

interface INestjsKnexService {
    getKnexConnection(): Promise<Knex>;
}

@Injectable()
export class NestjsKnexService implements INestjsKnexService {
    private readonly logger: Logger;
    private _knexConnection: Knex;

    constructor(
        @Inject(NESTJS_KNEX_OPTIONS) private _nestjsKnexOptions: NestjsKnexOptions,
    ) {
        this.logger = new Logger('NestjsKnexService');
        this.logger.log(`Setting up NestjsKnex Service`);
    }

    async getKnexConnection(): Promise<Knex> {
        const timeout = new Promise((_, reject) =>
            setTimeout(
                () => reject(new Error(`Database connection timed out after ${5000} ms.`)),
                5000),
            );

        const setupDatabase = new Promise<Knex>((resolve) => {
            if (this._knexConnection) {
                return resolve(this._knexConnection);
            }
            this._knexConnection = knex(this._nestjsKnexOptions);
            this._knexConnection.raw('SELECT 1')
                .then(() => resolve(this._knexConnection));
        });

        return await Promise.race([
            setupDatabase,
            timeout,
        ]) as Promise<Knex>;
    }
}
