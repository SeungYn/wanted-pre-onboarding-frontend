export default function useLogin(authService, tokenStorage) {
  const handleSubmit = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        tokenStorage.saveToken(data.access_token);
      })
      .catch((e) => alert(e.message));
  };

  return { handleSubmit };
}
