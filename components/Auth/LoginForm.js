// components/Auth/LoginForm.js
"use client"; // Add this line

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from '../../app/Homepage.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formm}>
      <div >
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.buttonsubmit}>Login</button>
    </form>
  );
};

export default LoginForm;
