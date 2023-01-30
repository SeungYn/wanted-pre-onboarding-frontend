import React from 'react';

export default function useLogin(authService) {
  const handleSubmit = async ({ email, password }) => {
    return await authService.login({ email, password });
  };
  return { handleSubmit };
}
