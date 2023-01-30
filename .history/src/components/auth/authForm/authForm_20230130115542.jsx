import { useState } from 'react';
import styles from './authForm.module.css';
export default function authForm({ onChange, onSubmit }) {
  const [authForm, setAuthForm] = useState();

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
