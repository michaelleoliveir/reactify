import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"

import { RiHome2Line, RiInformation2Line } from "@remixicon/react"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                REACT<span>IFY</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar