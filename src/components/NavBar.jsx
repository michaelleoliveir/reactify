import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                React<span>ify</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar