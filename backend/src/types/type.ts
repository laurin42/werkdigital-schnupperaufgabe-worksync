import { users, workSession } from "../db/schema";

//Get the type defintions from drizzle schema
export type WorkSession = typeof workSession.$inferSelect;
export type NewWorkSession = typeof workSession.$inferInsert;

export type User = typeof users.$inferInsert;
export type NewUser = typeof users.$inferInsert;