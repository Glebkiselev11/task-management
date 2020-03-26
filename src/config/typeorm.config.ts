import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gleb',
  password: '12345678',
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};