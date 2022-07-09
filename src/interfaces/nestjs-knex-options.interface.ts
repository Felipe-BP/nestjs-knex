import { Knex } from 'knex';

export type ConnectionConfig = Pick<Knex.Config, 'connection'>;

export interface NestjsKnexConfig {
    development: ConnectionConfig;
    test: ConnectionConfig;
    stagging: ConnectionConfig;
    production: ConnectionConfig;
}

type NestjsKnexOptions = Knex.Config & { name?: string };

export default NestjsKnexOptions;
