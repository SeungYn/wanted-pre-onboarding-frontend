import React from 'react';
import { useService } from '../../../context/ServiceContext';
import useForm from '../../../hooks/useForm';
import useLogin from '../../../hooks/useLogin';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer({ type }) {
  const { authService } = useService();
  const { handleSubmit } = useLogin(authService);
  const { authForm, onChange } = useForm();
  return (
    <>
      <AuthForm
        type={type}
        handleSubmit={handleSubmit}
        authForm={authForm}
        onChange={onChange}
      />
    </>
  );
}
