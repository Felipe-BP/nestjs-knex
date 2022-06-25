import { randomUUID } from 'crypto';
import { Controller, Delete, Get, Inject, Param, Query } from '@nestjs/common';

import { Knex } from 'knex';

import { KNEX_CONNECTION } from '../constants';
@Controller()
export class NestjsKnexClientController {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) { }

    @Get()
    async index() {
        await this.knex('cats').insert({
            id: randomUUID(),
            name: 'Fred',
            age: 5,
            breed: 'tom cat',
            is_deleted: false,
        });

        const cats = await this.knex.select('*').from('cats');

        return cats;
    }

    @Get('byname')
    async getByName(@Query('name') catName: string) {
        return await this.knex.table('cats')
            .where('is_deleted', false)
            .andWhere('name', 'like', catName);
    }

    @Delete(':catId')
    async softDelete(@Param('catId') catId: string) {
        return await this.knex('cats')
            .update({ is_deleted: true })
            .where({ id: catId });
    }
}
