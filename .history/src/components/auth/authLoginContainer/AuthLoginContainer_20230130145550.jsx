import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAuthService } from '../../../context/ServiceContext';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer({ type }) {
  const a = useAuthService();
  console.log(a);
  const handleSubmit = ({ email, password }) => {};
  return (
    <>
      <AuthForm type={type} />
    </>
  );
}
