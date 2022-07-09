import { NestjsKnexConfig } from 'nestjs-knexjs';
import { Knex } from 'knex';

const knexConfig: NestjsKnexConfig = {
    development: {
        connection: {
            host: process.env.DEV_HOST,
            user: process.env.DEV_USER,
            password: process.env.DEV_PASS,
            database: process.env.DEV_DATABASE,
            port: Number(process.env.DEV_PORT),
        },
    },
    test: {
        connection: {
            host: process.env.TEST_HOST,
            user: process.env.TEST_USER,
            password: process.env.TEST_PASS,
            database: process.env.TEST_DATABASE,
            port: Number(process.env.TEST_PORT),
        },
    },
    stagging: {
        connection: {
            host: process.env.STAGGING_HOST,
            user: process.env.STAGGING_USER,
            password: process.env.STAGGING_PASS,
            database: process.env.STAGGING_DATABASE,
            port: Number(process.env.STAGGING_PORT),
        },
    },
    production: {
        connection: {
            host: process.env.PROD_HOST,
            user: process.env.PROD_USER,
            password: process.env.PROD_PASS,
            database: process.env.PROD_DATABASE,
            port: Number(process.env.PROD_PORT),
        },
    },
};

export const config: Pick<Knex.Config, 'connection'> = knexConfig[process.env.NODE_ENV ?? 'development'];