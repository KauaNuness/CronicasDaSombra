import { useEffect, useRef } from "react";
import styles from "../styles/Inicio.module.css";
import Carousel from "../components/Carousel";
import hollowKnightImg from "../assets/images/capa.jpg"; 
import teamCherryLogo from "../assets/images/capa2.jpg"; 

export default function Inicio() {
  const hollowRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (hollowRef.current) observer.observe(hollowRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (hollowRef.current) observer.unobserve(hollowRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.titulo}>Crônicas da Sombra</h1>
        <p className={styles.subtitulo}>
          Um projeto front-end inspirado no universo de Hollow Knight
        </p>
        <Carousel />
      </header>

      <section className={styles.minimalSection}>
        <div ref={hollowRef} className={`${styles.card} ${styles.scrollReveal}`}>
          <img
            src={hollowKnightImg}
            alt="Capa Hollow Knight"
            className={styles.imagem}
          />
          <div className={styles.texto}>
            <h3>O que é Hollow Knight?</h3>
            <p>
              Hollow Knight é um jogo de ação e aventura estilo <em>metroidvania</em> lançado em 2017. 
              Ambientado no reino de Hallownest, o jogador explora cavernas, enfrenta inimigos e descobre
              segredos em um universo sombrio e fascinante.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.minimalSection}>
        <div ref={teamRef} className={`${styles.card} ${styles.scrollReveal}`}>
          
          <div className={styles.texto}>
            <h3>Quem desenvolveu?</h3>
            <p>
              Hollow Knight foi criado pela <strong>Team Cherry</strong>, um estúdio indie australiano
              formado por três pessoas. Eles conquistaram aclamação mundial com este projeto independente.
            </p>
          </div>

          <img
            src={teamCherryLogo}
            alt="Logo Team Cherry"
            className={styles.imagem}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <p>🌑 Feito com React + Vite — 2025 - Kauã Nunes</p>
      </footer>
    </div>
  );
}
