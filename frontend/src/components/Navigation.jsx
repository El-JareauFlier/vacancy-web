import { Link, Outlet } from "react-router-dom";
//Here i made use of icons

const Navigation = () => {
  return (
    //this is the navigation bar
    <>
      <nav className="navbar">
          <ul className="navContainer">
            <li>
              <Link to="/" className="Alink">
                logo
              </Link>
            </li>

            <li>
              <Link to="/AboutUs" className="Alink">
                About us
              </Link>
            </li>

            <li>
              <Link to="/Login" className="Alink">
                Login
              </Link>
            </li>
          </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;