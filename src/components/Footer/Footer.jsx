
import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ isPlaying, onPlay, onPause, onReset }) => {
    
    return (
        <footer className={styles.menuInferior}>
            <button
                className={styles.menuInferiorButton}
                onClick={isPlaying ? onPause : onPlay}
            >
                {isPlaying ? (
                    <img src="./public/images/pause.png" alt="Pause" />
                ) : (
                    <img src="./public/images/play.png" alt="Play" />
                )}
            </button>

            <button
                className={styles.menuInferiorButton}
                onClick={onReset}
            >
                <img src="./public/images/reset.png" alt="Reset" />
            </button>
        </footer>
    );
};

export default Footer;
