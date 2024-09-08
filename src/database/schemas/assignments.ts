import { date, int, mysqlEnum, mysqlTable, text, timestamp } from 'drizzle-orm/mysql-core';

export const assignments = mysqlTable('assignments', {
	id: int('id').primaryKey().autoincrement(),

	// Assignment title
	title: text('title').notNull(),

	// Description
	description: text('description'),

	// Subject
	subject: text('subject').notNull(),

	// Due date
	dueDate: date('due_date').notNull(),

	// Expires in (days)
	expires: int('expire_days').notNull(),

	// Status
	status: mysqlEnum('status', ['completed', 'progress', 'queue']).default('queue').notNull(),

	// Created at
	createdAt: timestamp('created_at').defaultNow().notNull(),

	// Updated at
	updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});
