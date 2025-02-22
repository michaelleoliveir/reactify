import { useState } from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { ArrowBigRight } from "lucide-react";

const About = () => {
    const [flippedCards, setFlippedCards] = useState({});

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
                {[1, 2, 3].map((index) => (
                    <Grid2 item xs={12} md={4} key={index}>
                        <ReactCardFlip isFlipped={!!flippedCards[index]} flipDirection="horizontal">
                            
                            <div className={styles.box}>
                                <p className={styles.boxText}>Tecnologias utilizadas</p>
                                <button onClick={() => handleFlip(index)}>
                                    <ArrowBigRight />
                                </button>
                            </div>

                            
                            <div className={styles.box}>
                                <p>Informação do Card {index}</p>
                                <button onClick={() => handleFlip(index)}>Voltar</button>
                            </div>
                        </ReactCardFlip>
                    </Grid2>
                ))}
            </Grid2>

            <Link to="/posts/create" className="botao">
                Criar post
            </Link>
        </div>
    );
};

export default About;
