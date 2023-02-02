import { Outlet } from 'react-router-dom';
import './App.css';
import ServiceProvider from './context/ServiceContext';

function App() {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
