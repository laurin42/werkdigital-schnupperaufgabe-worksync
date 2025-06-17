import { Request, Response } from "express";
import { db } from "../db/client";
import { workSession } from "../db/schema";
import { eq, and, isNull } from "drizzle-orm";


//START WORK SESSION
export async function startWorkSession(req: Request, res: Response) {
    const user = req.user;
    if (!user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    try {
        await db.insert(workSession).values({
            userId: user.userId,
            startTime: new Date()
        });
        res.status(201).json({ message: "Homeoffice Session started" })
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error starting Homeoffice Session", error });
    }
}

//STOP WORK SESSION
export async function stopWorkSession(req: Request, res: Response) {
    const user = req.user;
    if (!user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    try {
        //Active Sessions
        const sessions = await db.select().from(workSession)
            .where(
                and(
                    eq(workSession.userId, user.userId),
                    isNull(workSession.endTime)
                )
            )
            .orderBy(workSession.startTime)
            .limit(1);

        const activeSession = sessions[0];

        if (!activeSession) {
            res.status(400).json({ message: "no active session" })
            return;
        }


        //TOTAL TIME CALCULATION
        const endTime = new Date();
        const startTime = activeSession.startTime;
        const totalMs = endTime.getTime() - startTime.getTime();
        const totalMinutes = Math.round(totalMs / 60000) // Conversion from ms to minutes

        const updatedSessions = await db.update(workSession)
            .set({ 
                endTime: endTime,
                totalTime: totalMinutes
             })
            .where(eq(workSession.id, activeSession.id))
            .returning();

            const updatedSession = updatedSessions[0];

        res.status(200).json({ 
            message: "Homeoffice Session stopped",
        session: updatedSession });
    

        } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error stopping Homeoffice session" });
        return;
        }
}
