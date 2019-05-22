import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';
import { Api } from '../models/api';
import { PcDados } from '../models/pcdados';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})




export class GestorService {

  constructor(private http: HttpClient) { }
  private url = environment.urlapi + "/gestor";

  getFuncionarios(id: number): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.url + `/funcionarios/${id}`)
  } 

  getApis(id: number){
    return this.http.get<Api[]>(this.url + `/api/${id}`);
  } 

  //nao sei oq colocar na model de detalhe 
  // detalheAPI(id){
  //   return this.http.get<ApiDetalhe>(this.url + `/api/${id}`);
  // }

  setAPI(api: Api){
    return this.http.post(this.url + `/api`, api, httpOptions);
  }

  setFuncionario(func: Funcionario){
    return this.http.post(this.url + `/funcionario`, func, httpOptions);
  }

  getDadosPc(id){
    return this.http.get<PcDados>(this.url + `/pc/dados/${id}`);
  }

}
