import dotenv from "dotenv";
import { randomUUID } from "crypto";
import { db } from "../db/client";
import { users } from "../db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

dotenv.config();

export async function seed() {
    // GENERATING SUPERUSER
    const superUserEmail = process.env.SUPERUSER_EMAIL!;
    const superUserPass = process.env.SUPERUSER_PASS!;

    const superHash = await bcrypt.hash(superUserPass, 10);
    const superUser = await db.select().from(users).where(eq(users.email, superUserEmail));

    if (superUser.length === 0) {
        await db.insert(users).values({
            id: randomUUID(),
            email: superUserEmail,
            name: "Superuser",
            passwordHash: superHash,
        });
        console.log("Superuser seeded");
    } else {
        console.log("Superuser already exists");
    }

    //GENERATE DUMMY USERS
    for (let i = 1; i <= 25; i++) {
        const userMail = `users${i}@worksync.de`;
        const userPass = `passwordHash${i}`;
        const userName = `User ${i}`;
        const userHash = await bcrypt.hash(userPass, 10);

        const user = await db.select().from(users).where(eq(users.email, userMail));
        if (user.length === 0) {
            await db.insert(users).values({
                id: randomUUID(),
                email: userMail,
                name: userName,
                passwordHash: userHash,
            });
            console.log("Dummy User wurden erstellt");
        }
    }
    console.log("Seeding complete");
}
