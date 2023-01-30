import React from 'react';
import { useService } from '../../../context/ServiceContext';
import useForm from '../../../hooks/useForm';
import useAuth from '../../../hooks/useLogin';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer({ type }) {
  const { authService } = useService();
  const { signIn } = useAuth(authService);
  const { authForm, onChange } = useForm();
  return (
    <>
      <AuthForm
        type={type}
        handleSubmit={signIn}
        authForm={authForm}
        onChange={onChange}
      />
    </>
  );
}
