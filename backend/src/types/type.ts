import { users, workSession } from "../db/schema";
import { Request } from "express";

//Get the type defintions from drizzle schema
export type WorkSession = typeof workSession.$inferSelect;
export type NewWorkSession = typeof workSession.$inferInsert;

export type User = typeof users.$inferInsert;
export type NewUser = typeof users.$inferSelect;

//Types and Interfaces for Auth
export interface JwtPayload {
    userId: string;
    email: string;
}