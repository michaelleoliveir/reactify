import { useState } from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const cards = [
        {
            front: "Tecnologias usadas",
            back: "Teste 1"
        },
        {
            front: "Teste de card",
            back: "Teste 2"
        },
        {
            front: "Teste de card outro",
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

                                <div className={styles.box}>
                                    <p className={styles.boxText}>{card.front}</p>
                                    <button className={styles.front} onClick={() => handleFlip(index)}>
                                        <ChevronRight size={35} />
                                    </button>
                                </div>


                                <div className={styles.box}>
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
