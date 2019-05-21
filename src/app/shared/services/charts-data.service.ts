import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PcDados } from 'src/app/models/pcdados';

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {

  constructor(private http: HttpClient) { }
  private url = environment.urlapi;

  getDadosProcessamentoPC(id: Number){
    return this.http.get<PcDados[]>(this.url + `/gestor/computador/${id}`);
  }

  getMemoriaeRamTotal(id){
    console.log(id)
    return this.http.get<any>(this.url + `/gestor/computador/total/${id}`);
  }

  getArmazenamentoUtilizado(id){
    return this.http.get<any>(this.url + `/gestor/computador/armazenamento/${id}`);
  }

  getRamUtilizado(id){
    return this.http.get<any>(this.url + `/gestor/computador/Ram/${id}`);
  }

}
