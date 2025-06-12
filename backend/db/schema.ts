import { pgTable, serial, timestamp, uuid, text } from "drizzle-orm/pg-core";

export const workSessions = pgTable("workSessions", {
    id: serial("id").primaryKey(),
    userId: uuid("userId").notNull(),
    startTime: timestamp("startTime").notNull(),
    endTime: timestamp("endTime"),
    note: text("note"),





});