import React, { useState } from 'react';

export default function useLogin(authService) {
  const handleSubmit = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => alert(e.message));
  };

  return { handleSubmit };
}
