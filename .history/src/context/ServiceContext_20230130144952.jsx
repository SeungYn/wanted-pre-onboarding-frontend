import { createContext } from 'react';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const authService = new AuthService(http);

const ServiceContext = createContext({ authService });

export function ServiceProvider({ children }) {
  return <ServiceContext.Provider>{children}</ServiceContext.Provider>;
}
