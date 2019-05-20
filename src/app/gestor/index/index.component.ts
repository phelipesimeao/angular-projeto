import { Component, OnInit } from '@angular/core';
import { GestorService } from 'src/app/services/gestor.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Funcionario } from 'src/app/models/funcionario';
import { FiltroService } from 'src/app/shared/services/filtro.service';

@Component({
  selector: 'app-index-gst',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private gestorService: GestorService, 
    private loginService: LoginService,
    public fillService: FiltroService
    ) { }

  listaFuncionarios: Funcionario[];
  input: string;

  ngOnInit() {
    this.gestorService.getFuncionarios(this.loginService.resposta.id)
      .subscribe(funcionarios => {
        this.listaFuncionarios = funcionarios;
        console.log(funcionarios);
      })

      //setInterval(funcao, tempo)
  }

}
