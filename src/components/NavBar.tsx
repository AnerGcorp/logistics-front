import { Link, NavLink } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import useLogo from "../hooks/useLogo";

const NavBar = () => {
  const { data: logo, error: logoError, isLoading: logoIsLoading } = useLogo();
  const {
    data: categories,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useCategories();

  const lastLogo = logo?.slice(-1);

  return (
    <nav className="navbar navbar-expand-lg custom-bottom-shadow navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0 pt-2">
        {lastLogo?.map((logo) => (
          <img key={logo.id} src={logo.icon} height="30px" />
        ))}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse pt-2" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          {categories?.map((category) => (
            <NavLink
              key={category.id}
              to={category.link}
              className="nav-item nav-link"
            >
              {category.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/"
          className="btn btn-secondary custom-blue-btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block animated slideInLeft"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
