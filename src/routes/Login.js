import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.scss';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    setUsername('');
    navigate('/', { replace: true });
    navigate(from, { replace: true });
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
