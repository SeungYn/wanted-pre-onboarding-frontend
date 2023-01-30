import { createContext, useContext } from 'react';
import TokenStorage from '../db/tokenStorage';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const tokenStorage = new TokenStorage();
const authService = new AuthService(http);
const ServiceContext = createContext({ authService });

export default function ServiceProvider({ children }) {
  return (
    <ServiceContext.Provider value={{ authService, tokenStorage }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  return useContext(ServiceContext);
}
