import React, { useState } from "react";
import { apiService } from "../services/apiService";
import { LoginFormProps } from "../types/type";

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //HANDLE LOGIN
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const token = await apiService.login(email, password);
      onLoginSuccess(token);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card-container">
      <h2>Login</h2>
      {/*LOGIN FORM */}
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort</label>
          <input
            id="password"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/*ERROR HANDLING */}
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isLoading} className="buttom-primary">
          {isLoading ? "Melde an..." : "Anmelden"}
        </button>
      </form>
    </div>
  );
}
