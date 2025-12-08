import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await api.post("/auth/login", { email, password });

    console.log("Login OK:", response.data);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Entrar</button>
    </form>
  );
}

localStorage.setItem("token", response.data.token);
window.location.href = "/dashboard";
