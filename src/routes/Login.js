import React, { useState } from 'react';
import styles from '../styles/Login.module.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    console.log(username);
  };
  return (
    <div className={styles.formWrapper}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};
export default Login;
