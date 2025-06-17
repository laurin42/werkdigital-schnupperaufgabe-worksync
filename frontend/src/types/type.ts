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
    totalTime: number | null;
    note: string | null;
}

export interface StopSessionResponse {
  message: string;
  session: WorkSession;
}


export interface DashboardProps {
  token: string;
  onLogout: () => void;
}

export interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}