export default function useAuth(authService, tokenStorage) {
  const login = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        tokenStorage.saveToken(data.access_token);
      })
      .catch((e) => alert(e.message));
  };

  return { login };
}
