import { useNavigate } from 'react-router-dom';

export default function useAuth(authService, tokenStorage) {
  const location = useNavigate();
  const signIn = async ({ email, password }) => {
    authService
      .login({ email, password })
      .then((data) => {
        tokenStorage.saveToken(data.access_token);
        location('/todos');
      })
      .catch((e) => alert(e.message));
  };

  const signUp = async ({ email, password }) => {
    authService
      .signup({ email, password })
      .then((data) => {
        alert('회원가입 성공');
        location('/signin');
      })
      .catch((e) => alert(e.message));
  };

  return { signIn, signUp };
}
