import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

export const DATA_BASE_CONFIGURATION = {
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: `${process.env.DATABASE_PORT}`,
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    entities: ["src/frameworks/data-services/entities/*.entity.ts"],
    migrations: ["src/frameworks/data-services/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
}

export default registerAs('typeorm', () => DATA_BASE_CONFIGURATION)
export const connectionSource = new DataSource(DATA_BASE_CONFIGURATION as DataSourceOptions);

