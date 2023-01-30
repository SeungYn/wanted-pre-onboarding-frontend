import { createContext, useContext } from 'react';
import TokenStorage from '../db/tokenStorage';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const tokenStorage = new TokenStorage();
const authService = new AuthService(http);
const ServiceContext = createContext({ authService });
console.log(ServiceContext);
export default function ServiceProvider({ children }) {
  console.log(123);
  return (
    <ServiceContext.Provider value={{ authService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  return useContext(ServiceContext);
}
