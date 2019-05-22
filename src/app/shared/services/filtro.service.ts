import { Injectable } from '@angular/core';
import { Api } from '../../models/api';
import { Pc } from '../../models/pc';
import { Funcionario } from 'src/app/models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor() { }

  fill(apis: Api[], filtro: string){
    if(apis.length === 0 || filtro === undefined || filtro.trim() === ''){
      return apis;
    }

    return apis.filter(
      v => v.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
   );
  }

  fillFuncs(funcs: Funcionario[], filtro: string){
    if(funcs.length == 0 || filtro === undefined || filtro.trim() === ''){
      return funcs;
    }

    return funcs.filter(
      v => v.nmFuncionario.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
   );
   
  }

}
