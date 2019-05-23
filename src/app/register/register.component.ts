import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor(private fb: FormBuilder, private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#909090';
 }

  registerForm: FormGroup;
  foiEnviado: boolean = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      nomeEmpresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', Validators.email],
      senha: ['', Validators.required],
    })
  }

  onRegister(){
    this.foiEnviado = true;
    if(this.registerForm.status == "VALID"){
      alert("Sucesso!!!!")
    }else{
      alert("Preencha corretamente todos os campos!!!")
    }
  }

}
