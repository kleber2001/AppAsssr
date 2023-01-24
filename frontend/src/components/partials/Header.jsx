import React from "react";
import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
        <header>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registro" class="nav-link">Registro</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </header>
    );
}

export default Header;