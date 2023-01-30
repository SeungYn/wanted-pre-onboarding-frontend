import { Navigate } from 'react-router-dom';
import AuthLoginContainer from '../components/auth/AuthContainer';
import { useService } from '../context/ServiceContext';

export default function AuthPage() {
  const { tokenStorage } = useService();
  if (tokenStorage.getToken()) return <Navigate to='/todo' />;
  return <AuthLoginContainer />;
}
