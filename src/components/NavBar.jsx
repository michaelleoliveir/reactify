import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"

import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

import { RiHome2Line, RiInformation2Line } from "@remixicon/react"

const NavBar = () => {
    const { user } = useAuthValue();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                REACT<span>IFY</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>

                {/* show options if user is NOT logged in */}
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Register
                            </NavLink>
                        </li>
                    </>
                )}

                {/* show options if user IS logged in */}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar