import React from 'react';

export default function useLogin(authService) {
  const handleSubmit = ({ email, password }) => {
    authService.login({ email, password });
  };
  return { handleSubmit };
}
