import React from 'react';
import { useLocation } from 'react-router-dom';
import AuthLoginContainer from '../components/auth/authLoginContainer/AuthLoginContainer';

export default function AuthPage() {
  const location = useLocation();
  const type = location.pathname === '/signin' ? 'signin' : 'signup';
  if (type === 'signin') return <AuthLoginContainer type={type} />;
  return <></>;
}
