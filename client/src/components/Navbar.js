import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div
        className="collapse custom-navbar justify-content-sm-between navbar-collapse"
        id="navbarSupportedContent"
      >
        <a className="navbar-brand">User Details Page</a>
        <ul className="navbar-nav mr-auto px-4">
          <li className="nav-item">
            <a
              className="nav-link cursor-pointer"
              onClick={() => navigate("/")}
            >
              User Form
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link cursor-pointer"
              onClick={() => navigate("userslist")}
            >
              Users List
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
