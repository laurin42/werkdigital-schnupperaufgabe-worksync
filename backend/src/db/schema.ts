import { pgTable, serial, timestamp, uuid, text } from "drizzle-orm/pg-core";

export const workSession = pgTable("work_sessions", {
    id: serial("id").primaryKey(),
    userId: uuid("user_id").notNull(),
    startTime: timestamp("start_time").notNull(),
    endTime: timestamp("end_time"),
    note: text("note"),

});