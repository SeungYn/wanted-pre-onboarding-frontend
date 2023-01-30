import { useState } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm({ onSubmit, type }) {
  const [authForm, setAuthForm] = useState({ email: '', password: '' });

  const onChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name='email'
        data-testid='email-input'
        value={authForm.email}
        placeholder='email'
        onChange={onChange}
      />
      <input
        className={styles.input}
        name='password'
        data-testid='password-input'
        value={authForm.password}
        placeholder='password'
        onChange={onChange}
      />
      <button className={styles.button} data-testid='signup-button'>
        {type}
      </button>
    </form>
  );
}
