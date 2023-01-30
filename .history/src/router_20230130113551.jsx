import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>root</>,
    errorElement:<>notFounded</>
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
