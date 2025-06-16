import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/profile", authMiddleware, (req, res) => {
    res.json({ user: req.user });
});

export default router