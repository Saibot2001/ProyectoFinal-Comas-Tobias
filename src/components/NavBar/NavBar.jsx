import { Link,NavLink } from "react-router-dom"


const NavBar = () => {
    
    return(
        <nav className="NavBar">
            <Link to='/'>
                <h3>Saurios 3D</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/celular'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>celular</NavLink>
                <NavLink to={'/category/table'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>table</NavLink>
                <NavLink to={'/category/notebook'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>notebook</NavLink>
            </div>
        </nav>
    )
}

export default NavBar