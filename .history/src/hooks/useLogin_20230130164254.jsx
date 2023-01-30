import React, { useState } from 'react';

export default function useLogin(authService) {
  const [error, setError] = useState(null);
  const handleSubmit = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  const errorConfirm = () => {
    setError(null);
  };
  return { handleSubmit };
}
