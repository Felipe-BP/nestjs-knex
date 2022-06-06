import { KNEX_CONNECTION } from './constants';
import { NestjsKnexService } from './nestjs-knex.service';

export const connectionFactory = {
    provide: KNEX_CONNECTION,
    useFactory: async (nestjsKnexService: NestjsKnexService) => {
        return nestjsKnexService.getKnexConnection();
    },
    inject: [NestjsKnexService],
};
