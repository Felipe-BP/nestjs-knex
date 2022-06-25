import { Inject } from '@nestjs/common';

type InjectConnectionFn = (connectionName: string | symbol) => ReturnType<typeof Inject>;

export const InjectConnection: InjectConnectionFn =
    (connectionName) => Inject(connectionName);