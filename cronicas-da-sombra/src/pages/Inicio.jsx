import styles from "../styles/Inicio.module.css";
import Carousel from "../components/Carousel";

export default function Inicio() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.titulo}>Crônicas da Sombra</h1>
        <p className={styles.subtitulo}>
          Um projeto front-end inspirado no universo de Hollow Knight
        </p>
        <Carousel />
      </header>

      <footer className={styles.footer}>
        <p>🌑 Feito com React + Vite — 2025</p>
      </footer>
    </div>
  );
}
