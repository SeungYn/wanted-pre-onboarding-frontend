import { useState } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm({ onChange, onSubmit }) {
  const [authForm, setAuthForm] = useState({ email: '', password: '' });

  return (
    <form className={styles.form}>
      <input className={styles.input} data-testid='email-input' />
      <input className={styles.input} data-testid='password-input' />
      <button className={styles.button} data-testid='signup-button'>
        회원가입
      </button>
    </form>
  );
}
