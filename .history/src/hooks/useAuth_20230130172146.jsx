import { useNavigate } from 'react-router-dom';

export default function useAuth(authService, tokenStorage) {
  const location = useNavigate();
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
      .signup({ email, password })
      .then((data) => {
        console.log(location);
        console.log(data);
        location('/signup');
      })
      .catch((e) => alert(e.message));
  };

  return { signIn, signUp };
}
