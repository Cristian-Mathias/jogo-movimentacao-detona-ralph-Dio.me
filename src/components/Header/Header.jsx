
import React from 'react';
import styles from './Header.module.css';

const Header = ({ timeLeft,score,lives }) => {

    return (
        <header className={styles.header}>
            <div className={styles.menuTime}>
                <h2 className={styles.menuTimeLeft}>Time Left</h2>
                <h2 className={styles.menuTimeLeftNumber}>{timeLeft}</h2>
            </div>
            <div className={styles.menuScore}>
                <h2 className={styles.menuTimeScore}>Your Score</h2>
                <h2 className={styles.menuTimeScoreNumber}>{score}</h2>
            </div>
            <div className={styles.menuLives}>
                <img src="./public/images/player.png" alt="Foto de jogador" />
                <h2 className={styles.menuLivesXp}>{lives}</h2>
            </div>
        </header>
    );
};

export default Header;
