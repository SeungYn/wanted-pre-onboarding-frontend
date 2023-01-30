import { Navigate } from 'react-router-dom';
import { useService } from '../context/ServiceContext';

export default function RouterProtect({ children }) {
  const { tokenStorage } = useService();
  if (!tokenStorage.getToken()) return <Navigate to='/signin' />;
  return children;
}
