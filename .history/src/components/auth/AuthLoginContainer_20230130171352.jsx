import React from 'react';
import { useLocation } from 'react-router-dom';
import { useService } from '../../context/ServiceContext';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useLogin';
import AuthForm from './authForm/AuthForm';

export default function AuthLoginContainer() {
  const location = useLocation();
  const type = location.pathname === '/signin' ? 'signin' : 'signup';
  const { authService } = useService();
  const { signIn, signUp } = useAuth(authService);
  const { authForm, onChange } = useForm();

  if (type === '/signup')
    return (
      <AuthForm
        type={type}
        handleSubmit={signUp}
        authForm={authForm}
        onChange={onChange}
      />
    );

  return (
    <AuthForm
      type={type}
      handleSubmit={signIn}
      authForm={authForm}
      onChange={onChange}
    />
  );
}
