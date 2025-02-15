import styles from "./About.module.css"

import { Link } from "react-router-dom"

import { Grid2 } from "@mui/material"

const About = () => {
    return (
        <div className={styles.principal}>
            <p className={styles.titulo}>Sobre o React<span>ify</span></p>
            <p className={styles.sub}>Projeto de blog criado a partir dos conhecimentos adquiridos do curso "React: do Zero a Maestria", do professor Matheus Battisti</p>

            <Grid2 container spacing={5} sx={{marginTop:"3rem"}}>
                <Grid2 item xs={12} sm={6} md={4}>
                    <div className={styles.box}>Box 1</div>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                    <div className={styles.box}>Box 2</div>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                    <div className={styles.box}>Box 3</div>
                </Grid2>
            </Grid2>
            
            <Link to="/posts/create" className="botao">
                Criar post
            </Link>
        </div>
    )
}

export default About