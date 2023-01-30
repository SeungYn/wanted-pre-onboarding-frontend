import { createContext, useContext } from 'react';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http(
  'https://pre-onboarding-selection-task.shop:12gww4g54whg54wh54'
);
const authService = new AuthService(http);
const ServiceContext = createContext({ authService });
console.log(ServiceContext);
export default function ServiceProvider({ children }) {
  return (
    <ServiceContext.Provider value={{ authService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  return useContext(ServiceContext);
}
