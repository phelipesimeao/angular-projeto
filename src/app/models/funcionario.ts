import { Pc } from './pc';
//import { Menu } from './menu';
import { Api } from './api';

export class Funcionario{
    idFuncionario: Number;
    nmFuncionario: String;
    nmEmail: String;
    nmSenha: String;
    cargo: string;
    apis?: Api[];
    pc?: Pc;
}