import { PcModule } from './../pc/pc.module';
import { ApiModule } from './../api/api.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CadfuncionarioComponent } from './cadfuncionario/cadfuncionario.component';
import { GestorRoutingModule } from './gestour-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent, 
    CadfuncionarioComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ApiModule,
    PcModule,
    GestorRoutingModule,
    FormsModule
  ],
  exports:[
    IndexComponent
  ]
})
export class GestorModule { }
