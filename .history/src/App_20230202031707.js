import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import ServiceProvider from './context/ServiceContext';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <ServiceProvider>
      <div className='App'>
        <Outlet />
      </div>
    </ServiceProvider>
  );
}

export default App;
