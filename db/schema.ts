import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const enquiries = sqliteTable("enquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  workEmail: text("work_email").notNull(),
  company: text("company").notNull(),
  teamSize: text("team_size").notNull(),
  priority: text("priority").notNull(),
  challenge: text("challenge").notNull().default(""),
  consent: integer("consent", { mode: "boolean" }).notNull().default(false),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
