// src/pages/LoginPage.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Santi" });
    navigate("/list");
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <button onClick={handleLogin} className="login-btn">Login</button>
    </div>
  );
}

export default LoginPage;
