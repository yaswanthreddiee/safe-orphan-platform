import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#2c3e50" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "15px" }}>About</Link>
      <Link to="/report" style={{ color: "white", marginRight: "15px" }}>Report</Link>
      <Link to="/login" style={{ color: "white", marginRight: "15px" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
    </nav>
  );
}

export default Navbar;
