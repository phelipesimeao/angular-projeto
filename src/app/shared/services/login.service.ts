import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class LoginService {
  private url = environment.urlapi + '/login';
  constructor(private http: HttpClient) { }
  
  idcargo: Number = 1;
  estaLogado: Boolean;
  menuEmitter = new EventEmitter<Boolean>();
  funcionario: Funcionario;
  resposta: any = {
    token: String,
    message: String,
  }

  fazerLogin(login: String, senha: String){
      return this.http.post(this.url, { email: login, senha: senha })      
  }

  deslogar(){
    this.menuEmitter.emit(false);
    this.estaLogado = false;
  }


}
