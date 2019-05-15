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
  private url = environment.urlapi + "/login";
  constructor(private http: HttpClient, private router: Router) { }
  
  idcargo: Number = 1;
  estaLogado: Boolean;
  menuEmitter = new EventEmitter<Boolean>();
  funcionario: Funcionario;

  fazerLogin(login: String, senha: String){
      // const obj = {
      //   login: login,
      //   senha: senha
      // }
      // this.http.post<Usuario>(this.url, obj, httpOptions)
      //   .subscribe(data => {
      //       if(!isNullOrUndefined(data)){
      //         this.menuEmitter.emit(true);
      //         return data;
      //       }
      //       this.menuEmitter.emit(false);
      //   });

      if(login === "haha" && senha === "hehe"){
        this.menuEmitter.emit(true);
        this.estaLogado = true;
        this.router.navigate(['/gestor']);
      }else{
        this.menuEmitter.emit(false);
      }
  }

  deslogar(){
    this.menuEmitter.emit(false);
    this.estaLogado = false;
  }


}
