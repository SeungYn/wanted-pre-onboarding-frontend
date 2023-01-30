import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useService } from '../../context/ServiceContext';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';
import AuthForm from './authForm/AuthForm';
import styles from './AuthGlobal.module.css';
export default function AuthContainer() {
  const location = useLocation();
  const type = location.pathname === '/signin' ? 'signin' : 'signup';
  const { authService, tokenStorage } = useService();
  const { signIn, signUp } = useAuth(authService, tokenStorage);
  const { authForm, onChange, resetForm } = useForm();

  return (
    <section className={styles.authContainer}>
      {type === 'signup' ? (
        <Link to='/signin'>signin</Link>
      ) : (
        <Link to='/signup'>signup</Link>
      )}

      {type === 'signup' ? (
        <AuthForm
          type={type}
          handleSubmit={signUp}
          authForm={authForm}
          onChange={onChange}
          resetForm={resetForm}
        />
      ) : (
        <AuthForm
          type={type}
          handleSubmit={signIn}
          authForm={authForm}
          onChange={onChange}
          resetForm={resetForm}
        />
      )}
    </section>
  );
}
