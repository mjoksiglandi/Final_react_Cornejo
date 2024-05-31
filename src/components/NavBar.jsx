import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-tpg.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="TRASHPANDA" width={180} />
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/"} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/about"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar"to={"/category/props"}>Props</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/Cosplay"}>Cosplay</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/Wild"}>Wild</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/Wild"}>Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;