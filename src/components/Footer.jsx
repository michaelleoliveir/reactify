import { NavLink } from "react-router-dom"

import styles from "./Footer.module.css"

import { RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "@remixicon/react"

const Footer = () => {
    return (
        <footer>
            <h3>Reactify.com</h3>
            <div>
                <NavLink to="/" id={styles.link}>HOME</NavLink>
                <NavLink to="/about" id={styles.link}>ABOUT</NavLink>
                <NavLink to="/contact" id={styles.link}>CONTACT</NavLink>
            </div>
            <div>
                <RiInstagramFill size={32}  id={styles.icons} />
                <RiLinkedinBoxFill size={32} id={styles.icons} />
                <RiMailFill size={32} id={styles.icons} />
            </div>
            <p>Copyright &copy;2025 All rights reserved | Blog developed by Michaelle Oliveira </p>
        </footer>
    )
}

export default Footer