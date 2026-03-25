CREATE TABLE `articles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(128) NOT NULL,
	`title` varchar(255) NOT NULL,
	`excerpt` text,
	`content` text,
	`category` varchar(128) NOT NULL,
	`readTimeMinutes` int NOT NULL DEFAULT 3,
	`imageUrl` varchar(512),
	`isPublished` boolean NOT NULL DEFAULT true,
	`publishedAt` timestamp DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `articles_id` PRIMARY KEY(`id`),
	CONSTRAINT `articles_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `conditions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(128) NOT NULL,
	`title` varchar(255) NOT NULL,
	`icon` varchar(8) NOT NULL DEFAULT '💊',
	`category` varchar(128) NOT NULL,
	`summary` text,
	`content` text,
	`metaTitle` varchar(255),
	`metaDesc` varchar(512),
	`isActive` boolean NOT NULL DEFAULT true,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `conditions_id` PRIMARY KEY(`id`),
	CONSTRAINT `conditions_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `contact_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(128) NOT NULL,
	`lastName` varchar(128) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(32),
	`enquiryType` varchar(64) NOT NULL DEFAULT 'general',
	`message` text NOT NULL,
	`isRead` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `prescription_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`prescriberName` varchar(255) NOT NULL,
	`prescriberNumber` varchar(64) NOT NULL,
	`qualifications` varchar(255),
	`practiceName` varchar(255),
	`practicePhone` varchar(32),
	`practiceEmail` varchar(320),
	`practiceAddress` text,
	`patientName` varchar(255) NOT NULL,
	`patientDob` varchar(16),
	`patientPhone` varchar(32),
	`patientAddress` text,
	`medicareNumber` varchar(32),
	`allergies` text,
	`specialInstructions` text,
	`medications` text NOT NULL,
	`prescriptionDate` varchar(16),
	`status` enum('pending','processing','completed','cancelled') NOT NULL DEFAULT 'pending',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `prescription_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(128) NOT NULL,
	`title` varchar(255) NOT NULL,
	`icon` varchar(8) NOT NULL DEFAULT '🏥',
	`description` text,
	`details` text,
	`imageUrl` varchar(512),
	`isActive` boolean NOT NULL DEFAULT true,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `services_id` PRIMARY KEY(`id`),
	CONSTRAINT `services_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	`rating` int NOT NULL DEFAULT 5,
	`text` text NOT NULL,
	`source` varchar(64) NOT NULL DEFAULT 'Google',
	`isActive` boolean NOT NULL DEFAULT true,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
