import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LstGest } from '../../mock/lst-gst-mock'; 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
  
})
export class NavBarComponent implements OnInit {

  constructor(public ls: LoginService) { }
  
  mostrarMenu: boolean;
  isCollapsed = true;
  lstgest = LstGest;

  ngOnInit() {
    this.ls.menuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }



}
