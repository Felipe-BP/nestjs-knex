import { Controller, Get, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../constants';
import Knex = require('knex');

@Controller()
export class NestjsKnexClientController {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) { }

    @Get()
    async index() {
        const newCat = await this.knex('cats').insert({
            name: 'Fred',
            age: 5,
            breed: 'tom cat',
        });

        const cats = await this.knex.select('*').from('cats');

        return cats;
    }
}
