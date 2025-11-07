import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setMessage("✅ Inicio de sesión exitoso. ¡Bienvenido de nuevo!");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="tu@correo.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            placeholder="Tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Iniciar sesión</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </section>
  );
};

export default LoginPage;
