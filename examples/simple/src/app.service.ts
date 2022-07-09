import { Injectable } from '@nestjs/common';

import { InjectConnection } from 'nestjs-knexjs';
import { Knex } from 'knex';
import { Cat } from 'knex/types/tables';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection()
    private readonly db: Knex
  ) {}

  async getAll(): Promise<Cat[]> {
    return await this.db.select('*').from('cats');
  }
}
