import { Http } from '../network/http';
import { AuthService } from '../service/authService';

const http = new Http('https://pre-onboarding-selection-task.shop');
const authService = new AuthService(http);
