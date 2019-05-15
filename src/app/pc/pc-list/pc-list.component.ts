import { Component, OnInit } from '@angular/core';
import { Pcs } from '../../mock/pc-mock'
import { FiltroService } from 'src/app/shared/services/filtro.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  constructor(public fillService: FiltroService) { }

  ngOnInit() {
    
  }
  
  input: string;
  pcs = Pcs;

}
