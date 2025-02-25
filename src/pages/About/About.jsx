import { useState } from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DiCss3Full, DiFirebase, DiJsBadge, DiNpm, DiReact } from "react-icons/di";

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
            back: "Teste 2"
        },
        {
            front: "LINKS",
            back: "Teste 3"
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


                                <div className={styles.box} id={styles.boxback}>
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
