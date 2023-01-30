import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useService } from '../../../context/ServiceContext';
import useLogin from '../../../hooks/useLogin';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer({ type }) {
  const { authService } = useService();
  const { handleSubmit } = useLogin(authService);

  const handleSubmit = ({ email, password }) => {};
  return (
    <>
      <AuthForm type={type} />
    </>
  );
}
