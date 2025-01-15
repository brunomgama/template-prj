import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

// Example "users" table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email"),
});

// Example "tasks" table
export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title"),
  userId: integer("user_id"),
});