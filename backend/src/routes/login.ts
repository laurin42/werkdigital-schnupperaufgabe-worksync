import { Router } from "express";
import { loginController } from "../controllers/authController";

const router = Router();

router.post("/", loginController);

export default router;