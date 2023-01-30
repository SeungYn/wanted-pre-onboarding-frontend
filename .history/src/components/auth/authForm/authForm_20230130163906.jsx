import { useEffect, useState } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm(props) {
  const { handleSubmit, type, onChange, authForm } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email: authForm.email, password: authForm.password });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
        disabled={!authForm.emailValidation || !authForm.passwordValidation}
      >
        {type}
      </button>
    </form>
  );
}
