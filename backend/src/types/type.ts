import {  workSessions } from "../db/schema";

//Get the type defintions from drizzle schema
export type WorkSession = typeof workSessions.$inferSelect;
export type NewWorkSession = typeof workSessions.$inferInsert; 