import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer() {
  const locations = useLocation();
  console.log(params);
  return (
    <>
      <AuthForm type='login' />
    </>
  );
}
