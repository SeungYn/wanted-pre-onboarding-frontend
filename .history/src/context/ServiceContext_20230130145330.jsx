import { createContext, useContext } from 'react';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const authService = new AuthService(http);

const ServiceContext = createContext({ authService });

export default function ServiceProvider({ children }) {
  return (
    <ServiceContext.Provider value={{ a: 1 }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function authServiceInstance() {
  return useContext(ServiceContext);
}
