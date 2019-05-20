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

  getDadosPC(id: Number){
    return this.http.get<PcDados[]>(this.url + `/gestor/computador/${id}`);
  }

}
