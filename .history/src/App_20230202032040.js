import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import ServiceProvider from './context/ServiceContext';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') navigate('/todo');
  }, []);

  return (
    <ServiceProvider>
      <div className='App'>
        <Outlet />
      </div>
    </ServiceProvider>
  );
}

export default App;
