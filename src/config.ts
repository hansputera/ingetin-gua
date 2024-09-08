import type { Configuration } from './types/index.js';

export const config: Configuration = {
	PORT: Number.parseInt(process.env.PORT ?? '9777', 10),
	database: {
		host: process.env.DB_HOST ?? 'localhost',
		port: Number.parseInt(process.env.DB_PORT ?? '3306', 10),
		user: process.env.DB_USERNAME ?? 'root',
		password: process.env.DB_PASSWORD ?? '',
		database: process.env.DB_DATABASE ?? 'ingetin-gua',
	},
};
