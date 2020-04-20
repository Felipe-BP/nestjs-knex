import { NestFactory } from '@nestjs/core';
import { NestjsKnexClientModule } from './nestjs-knex-client/nestjs-knex-client.module';

async function bootstrap() {
    const app = await NestFactory.create(NestjsKnexClientModule);
    await app.listen(3000);
}
bootstrap();
