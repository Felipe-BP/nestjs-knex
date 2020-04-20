/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import NestjsKnexOptions from './nestjs-knex-options.interface';
import {
    NestjsKnexOptionsFactory,
} from './nestjs-knex-options-factory.interface';

export interface NestjsKnexAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useExisting?: Type<NestjsKnexOptionsFactory>;
    useClass?: Type<NestjsKnexOptionsFactory>;
    useFactory?: (
        ...args: any[]
    ) => Promise<NestjsKnexOptions> | NestjsKnexOptions;
}
