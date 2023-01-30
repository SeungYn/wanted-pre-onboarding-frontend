import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer() {
  return (
    <>
      <AuthForm type='login' />
    </>
  );
}
