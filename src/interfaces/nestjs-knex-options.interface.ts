import { Config } from 'knex';

export type EnvConfig = Pick<Config, 'connection'>;

export interface NestjsKnexConfig {
    development: EnvConfig;
    test: EnvConfig;
    stagging: EnvConfig;
    production: EnvConfig;
}

type NestjsKnexOptions = Config;

export default NestjsKnexOptions;
