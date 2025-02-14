import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/Pages/Om"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Om
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="Logo">Todolist</h1>
    </>
  );
};

export default Navbar;
