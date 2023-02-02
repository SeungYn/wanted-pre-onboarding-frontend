import { Outlet } from 'react-router-dom';
import './App.css';
import ServiceProvider from './context/ServiceContext';

function App() {
  return (
    <ServiceProvider>
      <div className='App'>
        <Outlet />
      </div>
    </ServiceProvider>
  );
}

export default App;
