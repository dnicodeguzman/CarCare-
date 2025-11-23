import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (

    <nav className="navbar">
      <div className="navbar-brand">
        <h2> Car Care Garage </h2>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/services" className="nav-item">
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/appointment" className="nav-item">
            Appointment
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin" className="nav-item">
            Admin
          </NavLink>
        </li>
        
      </ul>

        <div className="navbar-logout">
        <a href=""> Logout </a>
      </div>

    </nav>
  );
}

export default Navbar;