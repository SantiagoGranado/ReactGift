import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();      
    navigate("/"); 
  };

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
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      ) : (
        <Link to="/login" className="login-btn">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
