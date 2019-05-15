import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pc } from '../models/pc';
import { PcDados } from '../models/pcdados';
import { Api } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {

  constructor(private http: HttpClient) { }
  private url = environment.urlapi + "/dev";

  getInformacoesPc(id){
    return this.http.get<Pc>(this.url + `/pc/${id}`);
  } 
  
  getDadosPc(id){
    return this.http.get<PcDados>(this.url + `/pc/dados/${id}`);
  }

  getApis(){
    return this.http.get<Api[]>(this.url + `/pc/apis`);
  }

  // completar a model de detalhe da api ( nao sei oq colocar )
  // detalheAPI(id){
  //   return this.http.get<ApiDetalhe>(this.url + `/pc/apis/${id}`);
  // }
}
