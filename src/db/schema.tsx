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

export const event = pgTable("event", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    start_date: date("start_date"),
    end_date: date("end_date"),
    category_id: integer("category_id").notNull().references(() => categories.id, { onDelete: "cascade" }),
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

export const foodElements = pgTable("food_elements", {
    id: serial("id").primaryKey(),
    name: text("name"),
    quantity: integer("quantity"),
    categoryId: integer("category_id").notNull().references(() => categories.id, { onDelete: "cascade" }),
})
