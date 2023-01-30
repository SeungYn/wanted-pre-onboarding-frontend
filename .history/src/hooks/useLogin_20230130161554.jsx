import React from 'react';

export default function useLogin(authService) {
  const handleSubmit = ({ email, password }) => {
    const data = authService.login({ email, password });
    console.log(data);
  };
  return { handleSubmit };
}
