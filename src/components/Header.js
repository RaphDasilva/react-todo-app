import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1>todos</h1>
    <p>Items will persist in the browser local storage</p>
  </header>
);

export default Header;
