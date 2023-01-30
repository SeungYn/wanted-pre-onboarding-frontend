import React from 'react';

export default function useLogin(authService) {
  const handleSubmit = async ({ email, password }) => {
    const data = await authService.login({ email, password });
    console.log(data);
  };
  return { handleSubmit };
}
