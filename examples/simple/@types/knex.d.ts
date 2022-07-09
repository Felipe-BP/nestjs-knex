import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface Cat {
    id: number;
    name: string;
    age: number;
    breed: string;
    is_deleted: boolean;
  }
  
  interface Tables {
    cats: Cat;

    cats_composite: Knex.CompositeTableType<
      Cat,
      Pick<Cat, 'name' | 'age' | 'breed' | 'is_deleted'>,
      Partial<Omit<Cat, 'id'>>
    >;
  }
}