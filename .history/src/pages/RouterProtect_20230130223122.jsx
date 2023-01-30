import { Navigate } from 'react-router-dom';
import { useService } from '../context/ServiceContext';

export default function AuthProtect({ children }) {
  const { tokenStorage } = useService();
  console.log(tokenStorage.getToken());
  if (!tokenStorage.getToken()) return <Navigate to='/signin' />;
  return children;
}
