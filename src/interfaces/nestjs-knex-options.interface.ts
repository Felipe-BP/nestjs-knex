import { Config } from 'knex';

export interface NestjsKnexConfig {
    development: Pick<Config, 'connection'>;
    test: Pick<Config, 'connection'>;
    stagging: Pick<Config, 'connection'>;
    production: Pick<Config, 'connection'>;
}

export default interface NestjsKnexOptions extends Config {}
