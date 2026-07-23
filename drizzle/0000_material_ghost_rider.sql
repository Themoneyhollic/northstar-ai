CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`work_email` text NOT NULL,
	`company` text NOT NULL,
	`team_size` text NOT NULL,
	`priority` text NOT NULL,
	`challenge` text DEFAULT '' NOT NULL,
	`consent` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
