import { AuthService } from './auth';
import { ApiService } from './api';

const url = 'http://localhost:8080/kanban';
export const authService = new AuthService(`${url}/api/auth`);
export const apiService = new ApiService(`${url}/api/backend`, authService);
