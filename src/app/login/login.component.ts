import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: String;
  senha: String;
  constructor(private loginService: LoginService, private router: Router) { }
  mostrarSpinner: boolean = false;
  ngOnInit() {
  }
  logar(){
    this.mostrarSpinner = true;
    console.log(this.login);
    console.log(this.senha);
    

    this.loginService.fazerLogin("adm", "adm")
    .subscribe(data => {
      console.log(data)
      this.loginService.resposta = data;
      if(this.loginService.resposta.token){
        this.loginService.estaLogado = true;
        this.loginService.menuEmitter.emit(true);
        this.mostrarSpinner = false;
        alert(this.loginService.resposta.message);
        this.router.navigate(['/gestor']);
      }else{
        alert("Deu ruim");
      }
      
  });
  }
}
