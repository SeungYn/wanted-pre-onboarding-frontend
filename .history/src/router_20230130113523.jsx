import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>root</>,
    children: [
      {
        path: '/signup',
        element: <>signup</>,
      },
      {
        path: '/signin',
        element: <>signin</>,
      },
    ],
  },
]);
