import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary" >
            <div className="navbar-brand" >
                Note app
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/" exact>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about" exact>
                        Информация
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar;