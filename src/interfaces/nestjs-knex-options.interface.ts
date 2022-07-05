import { Knex } from 'knex';

export type EnvConfig = Pick<Knex.Config, 'connection'>;

export interface NestjsKnexConfig {
    development: EnvConfig;
    test: EnvConfig;
    stagging: EnvConfig;
    production: EnvConfig;
}

type NestjsKnexOptions = Knex.Config & { name?: string };

export default NestjsKnexOptions;
