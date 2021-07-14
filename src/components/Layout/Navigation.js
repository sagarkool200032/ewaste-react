import { NavLink, Link } from "react-router-dom";
import classed from "./Navigation.module.css";
import logoImg from "../../assets/images/waste_logo.png";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container navbar">
        <Link className="navbar-brand" style={{ color: "green" }} to="/">
          <img
            src={logoImg}
            alt="404"
            width="40"
            height="34"
            className="d-inline-block align-top"
          />
          E-waste
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to='/'> Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle mr-auto"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item">Action</a>
                </li>
                <li>
                  <a className="dropdown-item">Another action</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="navbar-nav ml-auto">
            <form className="d-flex mb-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
