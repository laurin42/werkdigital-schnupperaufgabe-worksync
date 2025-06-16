import { workSession } from "../db/schema";

//Get the type defintions from drizzle schema
export type WorkSession = typeof workSession.$inferSelect;
export type NewWorkSession = typeof workSession.$inferInsert; 