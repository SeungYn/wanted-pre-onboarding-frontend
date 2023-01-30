import { useLocation } from 'react-router-dom';

export default function useAuth(authService, tokenStorage) {
  const location = useLocation();
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
        location('/signup');
      })
      .catch((e) => alert(e.message));
  };

  return { signIn, signUp };
}
