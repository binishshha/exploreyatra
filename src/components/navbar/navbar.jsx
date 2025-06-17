import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function NavBar() {
  const [hammenu, sethammenu] = useState(false);

  const toggle = () => {
    sethammenu(!hammenu);
  };

  return (
    <>
      <nav className="main">
        <div className="logo">EXPLOREयात्रा</div>
        <div className={hammenu? "navbar show":"navbar"}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/tour">TOUR</Link>
            </li>
            <li>
              <Link to="/trek">TREK</Link>
            </li>
            <li>
              <Link to="/contactus">CONTACTUS</Link>
            </li>
            <li>
              <Link to="/aboutus">ABOUTUS</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={toggle}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
