import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthPage from './pages/AuthPage';
import AuthProtect from './pages/AuthProtect';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <>notFound</>,
    children: [
      {
        path: 'todo',
        element: <AuthProtect>todo</AuthProtect>,
      },
      {
        path: 'signup',
        element: <AuthPage />,
      },
      {
        path: 'signin',
        element: <AuthPage />,
      },
    ],
  },
]);
