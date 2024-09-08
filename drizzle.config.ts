import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: [
    './src/database/schemas/assignments.ts',
  ],
  out: './drizzle',
  dialect: 'mysql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3306', 10),
    user: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_DATABASE ?? 'ingetin-gua',
  },
});