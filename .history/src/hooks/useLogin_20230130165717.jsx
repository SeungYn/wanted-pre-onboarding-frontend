import React, { useState } from 'react';

export default function useLogin(authService) {
  const [error, setError] = useState(null);
  const handleSubmit = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => alert(e));
  };

  const errorConfirm = () => {
    setError(null);
  };
  return { handleSubmit, error, errorConfirm };
}
