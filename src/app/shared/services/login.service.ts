import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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
  constructor(private http: HttpClient, private router: Router) { }
  
  estaLogado: Boolean;
  menuEmitter = new EventEmitter<Boolean>();
  funcionario: Funcionario;
  resposta: any = {
    token: String,
    message: String,
    id: Number,
    cargo: Number
  }
  mostrarSpinner = new EventEmitter<Boolean>();

  fazerLogin(login: String, senha: String){
      this.mostrarSpinner.emit(true);
      return this.http.post<any>(this.url, { email: login, senha: senha }).subscribe(data => {
        
        this.resposta = data;
        if(this.resposta.token){

          this.estaLogado = true;
          this.menuEmitter.emit(true);
          this.mostrarSpinner.emit(false);
          console.log(this.resposta)
          alert(this.resposta.message);
          if(this.resposta.cargo == 1){

            this.router.navigate(['/gestor']);

          }else{

            this.router.navigate(['/dev']);

          }

        }else{

          alert(data.message);

          this.mostrarSpinner.emit(false);

        }
      });      
  }

  deslogar(){
    this.menuEmitter.emit(false);
    this.estaLogado = false;
    alert('Você será redirecionado para a tela de login!');
  }


}
