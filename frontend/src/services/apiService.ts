import { User, WorkSession } from "../types/type";
import { StopSessionResponse } from "../types/type";

const BASE_URL = "/api";

export const apiService = {
    async login(email: string, password: string): Promise<string> {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
        } 
        const data = await response.json();
        return data.token;
    },

    async getProfile(token: string): Promise<User> {
        const response = await fetch(`${BASE_URL}/profile`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Error loading profile");
        const data = await response.json();
        return data.user;
    },

    async startWorkSession(token: string): Promise<WorkSession> {
        const response = await fetch(`${BASE_URL}/worksession/start`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Session läuft bereits. Bitte zuerst beenden, dann neu starten");
        return await response.json();
    },

    async stopWorkSession(token: string): Promise<StopSessionResponse> {
        const response = await fetch(`${BASE_URL}/worksession/stop`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error stopping Homeoffice Session" );
    }
    return response.json();
    }
}