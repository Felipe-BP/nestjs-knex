import { Injectable } from '@nestjs/common';

import { InjectConnection } from 'nestjs-knexjs';
import { Knex } from 'knex';
import { Cat, Album } from 'knex/types/tables';
import { DATABASE_CONNECTIONS } from './database/config';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection(DATABASE_CONNECTIONS.CATS)
    private readonly catsConnection: Knex,
    @InjectConnection(DATABASE_CONNECTIONS.ALBUMS)
    private readonly albumsConnection: Knex,
  ) {}

  async getAllCats(): Promise<Cat[]> {
    return await this.catsConnection.select('*').from('cats');
  }

  async getAllAlbums(): Promise<Album[]> {
    return await this.albumsConnection.select('*').from('album');
  }
}
