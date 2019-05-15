import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: String;
  senha: String;
  constructor(private loginService: LoginService) { }
  mostrarSpinner: boolean = false;
  ngOnInit() {
  }
  logar(){
    this.mostrarSpinner = true;
    console.log(this.login);
    console.log(this.senha);
    this.loginService.fazerLogin(this.login, this.senha);
  }
}
