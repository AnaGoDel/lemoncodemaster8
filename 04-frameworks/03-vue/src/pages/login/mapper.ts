import * as modelAPI from '../../rest-api/model';
import * as modelVM from './viewModel';

export const mapLoginVMToApiModel = (login: modelVM.LoginVM): modelAPI.Login => ({
    ...login,
})

