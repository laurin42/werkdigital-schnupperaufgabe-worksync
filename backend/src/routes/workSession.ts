import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { startWorkSession, stopWorkSession } from "../controllers/workSessionController";

const router = Router();


router.post("/start", authMiddleware, startWorkSession);
router.post("/stop", authMiddleware, stopWorkSession);



export default router;