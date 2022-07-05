import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestjsKnexService } from './nestjs-knex.service';
import {
    KNEX_CONNECTION,
    NESTJS_KNEX_OPTIONS,
} from './constants';
import {
    NestjsKnexOptions,
    NestjsKnexAsyncOptions,
    NestjsKnexOptionsFactory,
} from './interfaces';

@Global()
@Module({})
export class NestjsKnexModule {
    /**
     * Registers a configured NestjsKnex Module for import into the current module
     */
    public static forRoot(
        options: NestjsKnexOptions,
    ): DynamicModule {
        const dataSourceProvider = this.createConnectionProvider(options);
        return {
            module: NestjsKnexModule,
            providers: [
                NestjsKnexService,
                {
                    provide: NESTJS_KNEX_OPTIONS,
                    useValue: options,
                },
                dataSourceProvider,
            ],
            exports: [dataSourceProvider]
        };
    }

    /**
     * Registers a configured NestjsKnex Module for import into the current module
     * using dynamic options (factory, etc)
     */
    public static forRootAsync(
        options: NestjsKnexAsyncOptions,
    ): DynamicModule {
        return {
            module: NestjsKnexModule,
            providers: [
                this.createConnectionProvider(options),
                ...this.createAsyncProviders(options),
            ],
        };
    }

    private static createAsyncProviders(
        options: NestjsKnexAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }

        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }

    private static createConnectionProvider(
        options: NestjsKnexOptions | NestjsKnexAsyncOptions,
    ): Provider {
        return {
            provide: options?.name ?? KNEX_CONNECTION,
            useFactory: async (service: NestjsKnexService) => await service.getKnexConnection(),
            inject: [NestjsKnexService]
        }
    }

    private static createAsyncOptionsProvider(
        options: NestjsKnexAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: NESTJS_KNEX_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }

        // For useExisting...
        return {
            provide: NESTJS_KNEX_OPTIONS,
            useFactory: async (optionsFactory: NestjsKnexOptionsFactory) =>
                await optionsFactory.createNestjsKnexOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }

}
