import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );

  const handleLogin = (newToken: string) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>WorkSync</h1>
        <p>Home Office Zeiterfassung</p>
      </header>
      <main className="main-content">
        {token ? (
          <Dashboard token={token} onLogout={handleLogout} />
        ) : (
          <LoginForm onLoginSucess={handleLogin} />
        )}
      </main>
    </div>
  );
}
