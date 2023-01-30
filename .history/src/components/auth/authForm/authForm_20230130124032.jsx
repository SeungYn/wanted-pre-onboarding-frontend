import { useEffect, useState } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm({ onSubmit, type }) {
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    emailValidation: false,
    passwordValidation: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(authForm);
    switch (name) {
      case 'email':
        const valid = value.includes('@');
        if (valid) setAuthForm((form) => ({ ...form, emailValidation: true }));
        else setAuthForm((form) => ({ ...form, emailValidation: false }));

        return setAuthForm((form) => ({ ...form, email: value }));
      case 'password':
        if (value.length >= 8)
          setAuthForm((form) => ({ ...form, passwordValidation: true }));
        else setAuthForm((form) => ({ ...form, passwordValidation: false }));
        return setAuthForm((form) => ({ ...form, password: value }));
      default:
        return;
    }
  };

  useEffect(() => {
    console.log(123);
  }, [authForm]);

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
      <button
        className={styles.button}
        data-testid='signup-button'
        disabled={!authForm.validation && !authForm.validation}
      >
        {type}
      </button>
    </form>
  );
}
