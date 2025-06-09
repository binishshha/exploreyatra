import { Link } from "react-router";
import './style.css';

function NavBar(){
    return (
    <>
      <nav className="main">
        <div className="logo">EXPLOREयात्रा</div>
        <div className="navbar">
          <ul>
      <li><Link to='/'>HOME</Link></li>
    <li><Link to='/destinations'>POPULAR DESTINATION</Link></li>
    <li><Link to='/tour'>TOUR</Link></li>
    <li><Link to='/trek'>TREK</Link></li>
    <li><Link to='/contactus'>CONTACTUS</Link></li>
    <li><Link to='/aboutus'>ABOUTUS</Link></li>
    </ul>
    </div>
      </nav>
    </>
  )};

  export default NavBar;