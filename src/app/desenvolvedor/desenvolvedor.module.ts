import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NavlistComponent } from './navlist/navlist.component';
import { SidelistComponent } from './sidelist/sidelist.component';
import { DesenvolvedorRoutingModule } from './desenvolvedor-routing.module';

@NgModule({
  declarations: [
    IndexComponent, 
    NavlistComponent, 
    SidelistComponent
  ],
  imports: [
    CommonModule,
    DesenvolvedorRoutingModule
  ]
})
export class DesenvolvedorModule { }
