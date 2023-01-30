import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AuthForm from '../authForm/AuthForm';

export default function AuthLoginContainer({ type }) {
  return (
    <>
      <AuthForm type={type} />
    </>
  );
}
