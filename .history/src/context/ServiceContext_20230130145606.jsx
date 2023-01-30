import { createContext, useContext } from 'react';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const authService = new AuthService(http);

const ServiceContext = createContext({ authService });

export default function ServiceProvider({ children }) {
  return <ServiceContext.Provider>{children}</ServiceContext.Provider>;
}

export function useAuthService() {
  return useContext(ServiceContext);
}
