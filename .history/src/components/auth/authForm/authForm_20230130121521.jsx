import { useState } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm({ onSubmit, type }) {
  const [authForm, setAuthForm] = useState({ email: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        data-testid='email-input'
        value={authForm.email}
        placeholder='email'
      />
      <input
        className={styles.input}
        data-testid='password-input'
        value={authForm.password}
        placeholder='password'
      />
      <button className={styles.button} data-testid='signup-button'>
        {type}
      </button>
    </form>
  );
}
