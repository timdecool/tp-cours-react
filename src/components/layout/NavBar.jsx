import {Link} from "react-router-dom";
import ThemeSwitch from "../theme/ThemeSwitch.jsx";

const NavBar = () => {

  return (
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 flex gap-3 items-center">
          <Link to="/" className="btn btn-ghost text-xl">Magie de Noël</Link>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/reservation">Réserver</Link>
              </li>
              <li>
                <Link to="/participants">Participants</Link>
              </li>
            </ul>
          </div>
        </div>
        <ThemeSwitch />

      </nav>
  )
}
export default NavBar;