import {Link} from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">Magie de Noël</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/reservation">Réserver</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}
export default NavBar;