import { RequestHandler, Response } from "express";
import bcrypt from "bcryptjs";
import { config } from "../config";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { db } from "../db/client";
import { findUserByEmail } from "../services/userService";


const JWT_SECRET = config.jwtSecret;
const JWT_SECRET_EXPIRES = "72h";

export const loginController: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Please enter you email and password" });
        return;
    }

    try {
        //CHECK USER EMAIL
        const user = await findUserByEmail(email);
        if (!user) {
            res.status(401).json({ message: "incorrect email" })
            return;
        };
        //CHECK USER PASSWORD
        const passwordCheck = await bcrypt.compare(password, user.passwordHash);
        if (!passwordCheck) {
            res.status(401).json({ message: "incorrect password" })
            return;
        }

        const payload: JwtPayload = {
            userId: user.id,
            email: user.email,
        };

        //GENERATE TOKEN
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_SECRET_EXPIRES });

        //RETURN TOKEN
        res.json({ token });
        return;
    } catch (error) {
        console.error("Login error: ", error);
        res.status(500).json({ message: "Server error" })
        return;
    }
}