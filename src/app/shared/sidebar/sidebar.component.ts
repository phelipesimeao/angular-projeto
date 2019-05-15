import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LstGest } from 'src/app/mock/lst-gst-mock';
import { Lstdev } from 'src/app/mock/lst-dev-mock';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(private ls: LoginService) { }

  mostrarMenu: boolean;
  public lstmenugst = LstGest;
  lstmenudev: Menu[];

  ngOnInit() {
    this.ls.menuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    this.lstmenugst = LstGest;
    //this.lstmenudev = Lstdev;
    console.log(this.lstmenugst);
  }

}
