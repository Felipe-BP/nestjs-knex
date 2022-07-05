import { Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from './constants';

type InjectConnectionFn = (connectionName?: string) => ReturnType<typeof Inject>;

export const InjectConnection: InjectConnectionFn =
    (connectionName) => Inject(connectionName ?? KNEX_CONNECTION);