import { config } from "../config"
import { Response, NextFunction } from "express";
import { JwtPayload, AuthenticateRequest } from "../types/type";
import jwt from "jsonwebtoken";

const JWT_SECRET = config.jwtSecret;

export function authMiddleware(
    req: AuthenticateRequest,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    //if header is missing or header does not contain "bearer" its not valid
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Authorization header missing or incorrect" });
    }

    //Getting the actual token by removing space
    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, JWT_SECRET) as unknown as JwtPayload;
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: "invalid or expired token" })
    }
}


