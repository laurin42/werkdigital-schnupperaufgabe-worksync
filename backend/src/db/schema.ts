import { pgTable, serial, timestamp, uuid, text, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    name: text("name"),
    email: text("email").notNull().unique(),
    passwordHash: text("password_hash").notNull(),
});

export const workSession = pgTable("work_sessions", {
    id: serial("id").primaryKey(),
    userId: uuid("user_id")
        .notNull()
        .references(() => users.id), // Foreign Key 
    startTime: timestamp("start_time").notNull(),
    endTime: timestamp("end_time"),
    totalTime: integer("total_time"),
    note: text("note"),

});