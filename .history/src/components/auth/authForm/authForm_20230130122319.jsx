import { useEffect, useState } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm({ onSubmit, type }) {
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    validation: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setAuthForm((form) => ({ ...form, email: value }));
      case 'password':
        return setAuthForm((form) => ({ ...form, password: value }));
      default:
        return;
    }
  };

  useEffect(() => {}, [authForm]);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='email'
        name='email'
        data-testid='email-input'
        value={authForm.email}
        placeholder='email'
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='password'
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
