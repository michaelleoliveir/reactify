import { useState } from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DiCss3Full, DiFirebase, DiJsBadge, DiNpm, DiReact } from "react-icons/di";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const cards = [
        {
            front: "TECNOLOGIAS UTILIZADAS",
            back: (
                <>
                    <DiFirebase className={styles.iconsBack} size={54} />
                    <DiJsBadge className={styles.iconsBack} size={54} />
                    <DiNpm className={styles.iconsBack} size={54} />
                    <DiReact className={styles.iconsBack} size={54} />
                    <DiCss3Full className={styles.iconsBack} size={54} />
                </>
            )
        },
        {
            front: "BIBLIOTECAS",
            back: (
                <>
                    <a href="https://lucide.dev/" target="_blank" className={styles.itemsBack}>Lucide</a>
                    <br />
                    <a href="https://react-icons.github.io/react-icons/" target="_blank" className={styles.itemsBack}>React-Icons</a>
                    <br />
                    <a href="https://github.com/AaronCCWong/react-card-flip" target="_blank" className={styles.itemsBack}>Card Flip</a>
                    <br />
                    <a href="https://mui.com" target="_blank" className={styles.itemsBack}>Mui</a>
                </>
            )
        },
        {
            front: "CONTATO",
            back: (
                <>
                    <a href="https://www.linkedin.com/in/michaelle-oliveira/" target="_blank">
                        <FaLinkedinIn className={styles.iconsBack} size={54} />
                    </a>
                    <a href="https://github.com/michaelleoliveir" target="_blank">
                        <FaGithub className={styles.iconsBack} size={54} />
                    </a>
                    <a href="mailto:michaelle.oliveira101103@gmail.com" target="_blank">
                        <SiGmail className={styles.iconsBack} size={54} />
                    </a>
                </>
            )
        }
    ]

    // transformando somente o card que foi clicado
    const handleFlip = (index) => {
        setFlippedCards((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className={styles.principal}>
            <p className={styles.titulo}>
                Sobre o React<span>ify</span>
            </p>
            <p className={styles.sub}>
                Projeto de blog criado a partir dos conhecimentos adquiridos do curso
                "React: do Zero a Maestria", do professor Matheus Battisti.
            </p>

            <Grid2 container spacing={5} sx={{ marginTop: "3rem" }}>
                {cards.map((card, index) => {
                    return (
                        <Grid2 xs={12} md={4} key={index}>
                            <ReactCardFlip isFlipped={!!flippedCards[index]} flipDirection="horizontal">

                                <div className={styles.box} id={styles.boxFront}>
                                    <p className={styles.boxText}>{card.front}</p>
                                    <button className={styles.front} onClick={() => handleFlip(index)}>
                                        <ChevronRight size={35} />
                                    </button>
                                </div>


                                <div className={styles.box} id={styles.boxBack}>
                                    <p className={styles.boxText}>{card.back}</p>
                                    <button className={styles.back} onClick={() => handleFlip(index)}>
                                        <ChevronLeft size={41} />
                                    </button>
                                </div>
                            </ReactCardFlip>
                        </Grid2>
                    )
                })}
            </Grid2>

            <Link to="/posts/create" className="botao">
                Criar post
            </Link>
        </div>
    );
};

export default About;
