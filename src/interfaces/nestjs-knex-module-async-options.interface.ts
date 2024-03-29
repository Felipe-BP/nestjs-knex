/* Dependencies */
import { InjectionToken, ModuleMetadata, OptionalFactoryDependency, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import NestjsKnexOptions from './nestjs-knex-options.interface';
import {
    NestjsKnexOptionsFactory,
} from './nestjs-knex-options-factory.interface';

export interface NestjsKnexAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    name?: string;
    inject?: Array<InjectionToken | OptionalFactoryDependency>;
    useExisting?: Type<NestjsKnexOptionsFactory>;
    useClass?: Type<NestjsKnexOptionsFactory>;
    useFactory?: (
        ...args: unknown[]
    ) => Promise<NestjsKnexOptions> | NestjsKnexOptions;
}
