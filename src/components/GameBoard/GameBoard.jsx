import React, { useState, useEffect } from 'react';
import styles from './GameBoard.module.css';

const GameBoard = ({ isPlaying, onClick }) => {
    const [activeSquare, setActiveSquare] = useState(null);

    const getRandomSquare = () => {
        const randomSquare = Math.floor(Math.random() * 9) + 1;
        return randomSquare;
    };

    useEffect(() => {
        let interval;
    
        if (isPlaying) {
            console.log('Animation started');
            interval = setInterval(() => {
                const newSquare = getRandomSquare();
                console.log(`Setting active square to: ${newSquare}`);
                setActiveSquare(newSquare);
            }, 1000);
        } else {
            console.log('Animation paused');
            setActiveSquare(null);
        }
    
        return () => {
            console.log('Animation stopped');
            clearInterval(interval);
        };
    }, [isPlaying]);

    const handleSquareClick = (squareIndex) => {
        if (isPlaying && squareIndex === activeSquare) {
            onClick();
        }
    };

    useEffect(() => {
    }, [activeSquare]);

   const squares = [...Array(9)].map((_, index) => {
    return (
        <div
            key={index + 1}
            id={index + 1}
            className={`${styles.square} ${activeSquare === index + 1 ? styles.enemy : ''}`}
            onClick={() => handleSquareClick(index + 1)} 
        />
    );
});

    return (
        <main className={styles.panel}>
            <div className={styles.panelRow}>
                {squares.slice(0, 3)}
            </div>
            <div className={styles.panelRow}>
                {squares.slice(3, 6)}
            </div>
            <div className={styles.panelRow}>
                {squares.slice(6, 9)}
            </div>
        </main>
    );
};

export default GameBoard;