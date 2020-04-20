import { NestjsKnexOptions } from './interfaces';

import { NESTJS_KNEX_OPTIONS } from './constants';

export function createNestjsKnexProviders(
    options: NestjsKnexOptions,
) {
    return [
        {
            provide: NESTJS_KNEX_OPTIONS,
            useValue: options,
        },
    ];
}
