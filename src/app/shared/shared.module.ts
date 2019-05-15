import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GestorModule } from '../gestor/gestor.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    GestorModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule
    
  ],
  exports: [
    SidebarComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
