import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  date,
} from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
});

// Categories table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
});

// Tasks table
export const tasks = pgTable("tasks", {
      id: serial("id").primaryKey(),
      title: text("title"),
      dueDate: date("due_date"),
      userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      categoryId: integer("category_id").notNull().references(() => categories.id, { onDelete: "cascade" }),
    },
);
