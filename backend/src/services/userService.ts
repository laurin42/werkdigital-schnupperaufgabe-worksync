import { users } from "../db/schema";
import { db } from "../db/client";
import { eq } from "drizzle-orm";

export async function findUserByEmail(email: string) {
    const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);
    return user.length > 0 ? user[0] : null;
}