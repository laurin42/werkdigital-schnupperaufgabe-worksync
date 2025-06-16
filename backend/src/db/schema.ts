import { pgTable, serial, timestamp, uuid, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    name: text("name"),
    email: text("email").notNull().unique(),
    passwordHash: text("passwort_hash").notNull(),
});

export const workSession = pgTable("work_sessions", {
    id: serial("id").primaryKey(),
    userId: uuid("user_id").notNull(),
    startTime: timestamp("start_time").notNull(),
    endTime: timestamp("end_time"),
    note: text("note"),

});