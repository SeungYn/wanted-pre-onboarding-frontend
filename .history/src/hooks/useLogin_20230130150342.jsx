import React from 'react';

export default function useLogin(authService) {
  const handleSignIn = ({ email, password }) => {
    authService.login({ email, password });
  };
  return <div></div>;
}
