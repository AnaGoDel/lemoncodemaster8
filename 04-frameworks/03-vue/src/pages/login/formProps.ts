import { PropOptions } from 'vue';
import { LoginVM, LoginError } from './viewModel';

export interface FormProps {
    login: PropOptions<LoginVM>;
    loginError: PropOptions<LoginError>;
    updateLogin: PropOptions<(field: string, value: string) => void>;
    loginRequest: PropOptions<() => void>;
}