import React, { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import { User, DashboardProps } from "../types/type";

export function Dashboard({ token, onLogout }: DashboardProps) {
  const [profile, setProfile] = useState<User | null>(null);
  const [sessionStatus, setSessionStatus] = useState(
    "Homeoffice Session noch nicht gestartet"
  );
  const [error, setError] = useState("");

  //GETTING PROFILE DATA
  useEffect(() => {
    const getProfile = async () => {
      try {
        const profileData = await apiService.getProfile(token);
        setProfile(profileData);
      } catch (err) {
        setError("Profile could not be loaded");
      }
    };
    if (token) {
      getProfile();
    }
  }, [token]);

  //HANDLE START AND STOP WORKSESSION
  const handleStart = async () => {
    setError("");
    try {
      await apiService.startWorkSession(token);
      setSessionStatus("Homeoffice Session gestartet");
    } catch (err: any) {
      setError(err.message);
    }
  };
  const handleStop = async () => {
    setError("");
    try {
      await apiService.stopWorkSession(token);
      setSessionStatus("Homeoffice Session beendet");
    } catch (err: any) {
      setError(err.message);
    }
  };

  //IF NOT SIGNED IN ...
  if (!profile) {
    return <div className="card-container">Profil wird geladen...</div>;
  }

  return (
    <div className="card-container-dashboard">
      <header>
        <h2>Schön, dass Du da bist!</h2>
        <button onClick={onLogout} className="button-logout">
          Abmelden
        </button>
      </header>
      <section className="session-control">
        <h3>Deine Zeiten</h3>

        {/*SHOWING THE CURRENT SESSION STATUS*/}
        <p>
          Status: <span className="session-status">{sessionStatus}</span>
        </p>
        {/*ERROR HANDLING*/}
        {error && <p className="error-message">{error}</p>}

        {/*START AND STOP BUTTONS*/}
        <div className="button-group">
          <button onClick={handleStart} className="button-start">
            Starten
          </button>
          <button onClick={handleStop} className="button-stop">
            Stop
          </button>
        </div>
      </section>
    </div>
  );
}
