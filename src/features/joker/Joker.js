import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectJoke,
  updateJoke,
  updateToCustomJoke
} from './jokerSlice';

import styles from './Counter.module.css';

export function Joker() {
  const joke = useSelector(selectJoke);
  const dispatch = useDispatch();
  const [customJokeText, setCustomJokeText] = useState('A man walks into a bar');

  const leJoke = customJokeText || "";



  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{joke}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Joke"
          value={leJoke}
          onChange={(e) => setCustomJokeText(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(updateToCustomJoke(customJokeText))}
        >
          Set custom joke
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(updateJoke("Programming"))}
        >
          Programming joke
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(updateJoke("Dark"))}
        >
          Dark joke
        </button>
      </div>
    </div>
  );
}
