export interface User {
    id: string; 
    email: string;
    name: string;
}

export interface WorkSession {
    id: number;
    userId: string;
    startTime: string;
    endTime: string | null;
    note: string | null;
}
