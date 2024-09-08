import { config } from '@/config.js';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import * as schemas from './schemas/index.js';

export const poolConnection = mysql.createPool({
	...config.database,
});

export const db = drizzle(poolConnection, {
	schema: schemas,
	mode: 'default',
});
