import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestjsKnexService } from './nestjs-knex.service';
import {
    NESTJS_KNEX_OPTIONS,
} from './constants';
import {
    NestjsKnexOptions,
    NestjsKnexAsyncOptions,
    NestjsKnexOptionsFactory,
} from './interfaces';
import { createNestjsKnexProviders } from './nestjs-knex.providers';
import { connectionFactory } from './nestjs-knex-connection.provider';

@Global()
@Module({
    providers: [NestjsKnexService, connectionFactory],
    exports: [NestjsKnexService, connectionFactory],
})
export class NestjsKnexModule {
    /**
     * Registers a configured NestjsKnex Module for import into the current module
     */
    public static register(
        options: NestjsKnexOptions,
    ): DynamicModule {
        return {
            module: NestjsKnexModule,
            providers: createNestjsKnexProviders(options),
        };
    }

    /**
     * Registers a configured NestjsKnex Module for import into the current module
     * using dynamic options (factory, etc)
     */
    public static registerAsync(
        options: NestjsKnexAsyncOptions,
    ): DynamicModule {
        return {
            module: NestjsKnexModule,
            providers: [
                ...this.createProviders(options),
            ],
        };
    }

    private static createProviders(
        options: NestjsKnexAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createOptionsProvider(options)];
        }

        return [
            this.createOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }

    private static createOptionsProvider(
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
