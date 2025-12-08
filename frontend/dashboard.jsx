export default function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <h2>Acesso negado</h2>;
  }

  return <h2>Bem-vindo à área privada!</h2>;
}
