import { Injectable } from '@angular/core';
import { Api } from '../../models/api';
import { Pc } from '../../models/pc';

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

  fillPC(pcs: Pc[], filtro: string){
    if(pcs.length === 0 || filtro === undefined || filtro.trim() === ''){
      return pcs;
    }

    return pcs.filter(
      v => v.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
   );
  }

}
