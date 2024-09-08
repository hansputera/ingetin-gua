import { db } from '@/database/db.js';
import { assignments } from '@/database/schemas/assignments.js';
import { Router } from 'express';

export const assignments_router = Router();

assignments_router.get('/', async (_, res) => {
	const assigns = await db
		.select({
			id: assignments.id,
			title: assignments.title,
			status: assignments.status,
		})
		.from(assignments);

	return res.json({
		data: assigns,
		statusCode: 200,
		message: 'Successfuly fetched assignments',
	});
});
