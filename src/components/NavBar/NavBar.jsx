import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Saurios 3D</h3>
            </Link>
            <div className="Categories">
                <NavLink to='/category/GADGETS' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    GADGETS
                </NavLink>
                <NavLink to='/category/MATES' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    MATES
                </NavLink>
                <NavLink to='/category/FIGURAS' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    FIGURAS
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
