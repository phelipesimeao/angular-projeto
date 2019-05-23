import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  login: String;
  senha: String;
  mostrarSpinner;
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder,
    private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#909090';
 }
  
  ngOnInit() {
    this.loginService.mostrarSpinner.subscribe(bool => this.mostrarSpinner = bool);
    console.log(this.mostrarSpinner)
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }


  logar(){

    this.loginService.fazerLogin(this.loginForm.get('email').value, this.loginForm.get('senha').value)
    
  }
}
