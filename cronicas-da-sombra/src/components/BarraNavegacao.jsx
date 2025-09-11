import { Link } from "react-router-dom";
import styles from "../styles/BarraNavegacao.module.css";
import logo from "../assets/images/Hollow-Knight-PNG.png";

import nota1 from "../assets/sons/Dirtmounth.mp3";
import nota2 from "../assets/sons/Reflection.mp3";
import nota3 from "../assets/sons/CityofTears.mp3";
import nota4 from "../assets/sons/HollowKnight.mp3";
import nota5 from "../assets/sons/Greenpath.mp3";

import { useRef } from "react";

export default function BarraNavegacao() {
  const sons = [nota1, nota2, nota3, nota4, nota5];

  const audiosRef = useRef(sons.map((src) => new Audio(src)));

  const tocarSom = (index) => {
    
    audiosRef.current.forEach((audio, i) => {
      if (i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const audio = audiosRef.current[index];
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <nav className={styles.navbar}>
    
      <div className={styles.hud}>
        <img src={logo} alt="Logo Hollow Knight" className={styles.knightIcon} />
        <div className={styles.healthBar}>
          {sons.map((_, i) => (
            <span
              key={i}
              className={styles.mask}
              onClick={() => tocarSom(i)}
            ></span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        <Link to="/" className={styles.link}>Início</Link>
        <Link to="/personagens" className={styles.link}>Personagens</Link>
        <Link to="/historia" className={styles.link}>História</Link>
        <Link to="/sobre" className={styles.link}>Sobre</Link>
      </div>
    </nav>
  );
}
