import React from 'react';
import styles from './Balloon.module.css';

const ResponseBalloon = ({ message, onClose }) => {
  return (
    <div className={styles.responseBalloon}>
      <div>
        <span className={styles.responseMessage}>{message}</span>
      </div>
      <div>
        <button
          id="close-balloon"
          className={styles.closeButton}
          onClick={onClose}
        >X</button>
      </div>
    </div >
  );
};

export default ResponseBalloon;

