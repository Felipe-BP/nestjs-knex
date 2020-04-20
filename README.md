<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestjsKnex -- generated by @nestjsplus/dyn-schematics</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
  <a href="https://github.com/nestjsplus/dyn-schematics" target="_blank">
    <img src="https://img.shields.io/badge/Built%20with-%40nestjsplus%2Fdyn--schematics-brightgreen" alt="Built with @nestjsplus/dyn-schematics">
  </a>
</div>

This dynamic module was generated with [Nest Dynamic Package Generator Schematics](https://github.com/nestjsplus/dyn-schematics).  You can read more about using the generator [here](https://github.com/nestjsplus/dyn-schematics).

## Why?

We love [Nestjs](https://nestjs.com/) framework and [Knex.js](http://knexjs.org/) SQL Builder, so, I decided to create this package to abstract the use of Knex.js with Nestjs, which uses TypeScript.

## Installation

NOT AVAILABLE IN NPM YET!

To install this generated project:

```bash
npm install nestjs-knex
```

(or yarn equivalent)

## Usage

First of all inside src/nestjs-knex-client folder I've created a nestjs application example using this package, with good pratices, as using dotenv, and knex configuration to each environment. So, check this out!

1. Import NestjsKnexModule and setup inside core module of your application:

    ```typescript
        @Module({
            controllers: [NestjsKnexClientController],
            imports: [NestjsKnexModule.register({
                client: 'pg',
                connection: {
                    host: 'host',
                    user: 'user',
                    password: 'pass',
                    database: 'database',
                    port: 5432,
                },
            })],
        })
        export class AppModule { }
    ```

2. Now use NestjsKnexService inside your service constructor to provide Knex connection:

    ```typescript
        constructor(private nestjsKnexService: NestjsKnexService) {
            this.knex = this.nestjsKnexService.getKnexConnection();

            //using
            console.log(this.knex('your-table').select('*'));
        }
    ```

    Or

    ```typescript
        constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {
            //using
            console.log(this.knex('your-table').select('*'));
        }
    ```
