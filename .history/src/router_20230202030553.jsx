import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthPage from './pages/AuthPage';
import RouterProtect from './pages/RouterProtect';
import TodosPage from './pages/TodosPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <>notFound</>,
    children: [
      {
        index: true,
        path: 'todo',

        element: (
          <RouterProtect>
            <TodosPage />
          </RouterProtect>
        ),
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
