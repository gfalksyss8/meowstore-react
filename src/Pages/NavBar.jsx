import { Link } from 'react-router-dom'
import NavLink from '../Components/NavLink'

import { useState, useEffect } from "react";

export default function NavBar() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme])

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Meow Store
                </Link>

                < NavLink to="/catalog" label="Catalog"/>
                < NavLink to="/catoftheday" label="Cat of the Day"/>
                < NavLink to="/cart" label="Cart"/>

                <button
                    className="btn btn-sm"
                    onClick={toggleTheme}
                >
                    <i
                    className={
                        theme === "light"
                        ? "bi bi-brightness-high"
                        : "bi bi-brightness-high-fill"
                    }
                ></i>
                </button>
            </div>
        </nav>
    )
}