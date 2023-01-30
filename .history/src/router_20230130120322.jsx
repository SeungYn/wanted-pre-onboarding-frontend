import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthPage from './pages/AuthPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <>notFound</>,
    children: [
      {
        path: 'todo',
        element: <>todo</>,
      },
      {
        path: 'signup',
        element: <>signup</>,
      },
      {
        path: 'signin',
        element: <AuthPage />,
      },
    ],
  },
]);
