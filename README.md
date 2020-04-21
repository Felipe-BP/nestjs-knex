<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>  

<h3 align="center">
  Easy peasy way to integrate <a href="https://nestjs.com/" target="blanck">Nestjs</a> and <a href="http://knexjs.org/" target="blanck">Knex.js</a>! 🚀
</h3>

## Why?

We love [Nestjs](https://nestjs.com/) framework and [Knex.js](http://knexjs.org/) SQL Builder, so, I decided to create this package to abstract the use of Knex.js with Nestjs, which uses TypeScript.

## Installation

NOT AVAILABLE IN NPM YET!

To install this generated project:

```bash
$ npm install nestjs-knex
```

Install one of the following wich you will use

```bash
$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install mssql
```

(or yarn equivalent)

## Usage

First of all inside src/nestjs-knex-client folder I've created a nestjs application example using this package, with good pratices, as using dotenv, and knex configuration to each environment. So, check this out!

1. Import NestjsKnexModule and setup inside core module of your application:

    ```typescript
        @Module({
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
        private readonly knex: Knex = null;

        constructor(private nestjsKnexService: NestjsKnexService) {
            this.knex = this.nestjsKnexService.getKnexConnection();
        }

        async getAll() {
            return await this.knex('your-table').select('*');
        }
    ```

    Or

    ```typescript
        constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) { }

        async getAll() {
            return await this.knex('your-table').select('*');
        }
    ```

## Contributing

All contributions are welcome. Use the pull request as a way to contribute to the evolution of the package. My intention is over time to add pipelines with github actions as a way to facilitate contributions.

### Contribution Guidelines

This package is configured with [commitlint](https://github.com/conventional-changelog/commitlint), so, to contribute you have to know about the [rules](https://www.conventionalcommits.org/en/v1.0.0/) of commitlint

## Author

[Felipe Bueno](github.com/Felipe-BP)
