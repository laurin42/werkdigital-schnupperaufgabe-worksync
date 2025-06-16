import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { config } from "../config";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { db } from "../db/client";
import { findUserByEmail } from "../services/userService";


const JWT_SECRET = config.jwtSecret;
const JWT_SECRET_EXPIRES = "72h";

export async function loginController(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter you email and password" });
    }

    try {
        //CHECK USER EMAIL
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: "incorrect email" })
        };
        //CHECK USER PASSWORD
        const passwordCheck = await bcrypt.compare(password, user.passwordHash);
        if (!passwordCheck) {
            return res.status(401).json({ message: "incorrect password" })
        }

        const payload: JwtPayload = {
            userId: user.id,
            email: user.email,
        };

        //GENERATE TOKEN
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_SECRET_EXPIRES });

        //RETURN TOKEN
        return res.json({ token });
    } catch (error) {
        console.error("Login error: ", error);
        return res.status(500).json({ message: "Server error" })
    }
}