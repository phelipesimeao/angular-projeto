import { Pc } from './pc';
import { Menu } from './menu';
import { Api } from './api';

export class Funcionario{
    id: String;
    nome: String;
    email: String;
    senha: String;
    cargo: string;
    funcionarios?: Funcionario[];
    apis?: Api;
    pc?: Pc;
    menus: Menu[];
}