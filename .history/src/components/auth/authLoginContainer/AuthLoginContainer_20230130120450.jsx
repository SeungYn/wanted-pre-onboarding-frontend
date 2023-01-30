import React from 'react';
import { useParams } from 'react-router-dom';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <AuthForm type='login' />
    </>
  );
}
