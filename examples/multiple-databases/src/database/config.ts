import { NestjsKnexOptions } from 'nestjs-knexjs';

export enum DATABASE_CONNECTIONS {
    CATS = 'CATS',
    ALBUMS = 'ALBUMS'
}

export const catConfig: NestjsKnexOptions = {
    name: DATABASE_CONNECTIONS.CATS,
    client: 'pg',
    connection: {
        host: process.env.CAT_HOST,
        user: process.env.CAT_USER,
        password: process.env.CAT_PASS,
        database: process.env.CAT_DATABASE,
        port: Number(process.env.CAT_PORT),
    }
};

export const albumConfig: NestjsKnexOptions = {
    name: DATABASE_CONNECTIONS.ALBUMS,
    client: 'pg',
    connection: {
        host: process.env.ALBUM_HOST,
        user: process.env.ALBUM_USER,
        password: process.env.ALBUM_PASS,
        database: process.env.ALBUM_DATABASE,
        port: Number(process.env.ALBUM_PORT),
    }
};