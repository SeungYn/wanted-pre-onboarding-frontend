export default function useAuth(authService, tokenStorage) {
  const signIn = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        tokenStorage.saveToken(data.access_token);
      })
      .catch((e) => alert(e.message));
  };

  const signUp = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        tokenStorage.saveToken(data.access_token);
      })
      .catch((e) => alert(e.message));
  };

  return { signIn, signUp };
}
