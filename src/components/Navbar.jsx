import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/list" className="nav-link">Gift List</Link>
        <Link to="/form" className="nav-link">Add Gift</Link>
      </div>
    </nav>
  );
}

export default Navbar;
