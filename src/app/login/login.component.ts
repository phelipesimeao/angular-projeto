import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: String;
  senha: String;

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) { }
  mostrarSpinner: boolean = false;
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }


  logar(){
    this.mostrarSpinner = true;
    
    

    this.loginService.fazerLogin(this.loginForm.get('email').value, this.loginForm.get('senha').value)
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
        alert(data.message);
      }
    });
  }
}
