import NestjsKnexOptions from './nestjs-knex-options.interface';

export interface NestjsKnexOptionsFactory {
    createNestjsKnexOptions():
        | Promise<NestjsKnexOptions>
        | NestjsKnexOptions;
}
