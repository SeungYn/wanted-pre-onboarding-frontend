import { useService } from '../context/ServiceContext';

export default function AuthProtect({ children }) {
  const { tokenStorage } = useService();
  console.log(tokenStorage);

  return { children };
}
