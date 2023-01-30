import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useService } from '../../../context/ServiceContext';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer({ type }) {
  const { authService } = useService();

  const handleSubmit = ({ email, password }) => {};
  return (
    <>
      <AuthForm type={type} />
    </>
  );
}
