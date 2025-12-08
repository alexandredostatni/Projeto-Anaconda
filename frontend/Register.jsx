import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await api.post("/auth/register", { name, email, password });

    console.log("Cadastro OK:", response.data);
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Cadastrar</h2>
      <input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Cadastrar</button>
    </form>
  );
}
