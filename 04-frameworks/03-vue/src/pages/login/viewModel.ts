import { createDefaultValidationResult, ValidationResult } from '@lemoncode/fonk';

export interface LoginVM {
    name: string;
    password: string;
}

export const createEmptyLoginVM = (): LoginVM => ({
    name: "",
    password: "",
})

export interface LoginError {
    name: ValidationResult;
    password: ValidationResult;
}

export type ResultLoginError = Record<keyof LoginError, boolean | string>;

// export interface ResultLoginError {
//     name: boolean | string;
//     password: boolean | string;
// }

export const createEmptyLoginError = () => ({
    name: createDefaultValidationResult(),
    password: createDefaultValidationResult(),
});