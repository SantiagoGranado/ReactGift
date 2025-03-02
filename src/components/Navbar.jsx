import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/list" className="nav-link">Gift List</Link>
        <Link to="/form" className="nav-link">Add Gift</Link>
      </div>

      {currentUser ? (
        <div className="auth-container">
          <span className="user-text">Welcome, {currentUser.name}!</span>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: "Santi" })} className="login-btn">Login</button>
      )}
    </nav>
  );
}

export default Navbar;
