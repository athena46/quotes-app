import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
 
export const devConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev-user',
  password: 'dev-user',
  database: 'quotes-app',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
}