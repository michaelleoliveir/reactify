import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"

import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

const NavBar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

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
                                Registrar
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
                        Sobre
                    </NavLink>
                </li>

                {user && (
                    <li>
                        <button onClick={logout} className={styles.buttonLogOut}>
                            Sair
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar