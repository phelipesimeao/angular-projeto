import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-cadfuncionario',
  templateUrl: './cadfuncionario.component.html',
  styleUrls: ['./cadfuncionario.component.scss']
})
export class CadfuncionarioComponent implements OnInit {

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

}
