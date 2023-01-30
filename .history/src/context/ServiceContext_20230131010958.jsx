import { createContext, useContext } from 'react';
import TokenStorage from '../db/tokenStorage';
import { Http } from '../network/http';
import { AuthService } from '../service/authService';
import TodoService from '../service/todoService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const tokenStorage = new TokenStorage();
const authService = new AuthService(http);
const todoService = new TodoService(http, tokenStorage);
const ServiceContext = createContext({});

export default function ServiceProvider({ children }) {
  return (
    <ServiceContext.Provider value={{ authService, tokenStorage, todoService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  return useContext(ServiceContext);
}
