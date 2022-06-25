/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import NestjsKnexOptions from './nestjs-knex-options.interface';
import {
    NestjsKnexOptionsFactory,
} from './nestjs-knex-options-factory.interface';

export interface NestjsKnexAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    inject?: unknown[];
    useExisting?: Type<NestjsKnexOptionsFactory>;
    useClass?: Type<NestjsKnexOptionsFactory>;
    useFactory?: (
        ...args: unknown[]
    ) => Promise<NestjsKnexOptions> | NestjsKnexOptions;
}
