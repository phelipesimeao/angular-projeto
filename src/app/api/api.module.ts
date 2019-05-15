import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { ApiListSimpleComponent } from './api-list-simple/api-list-simple.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApiListComponent, ApiDetailComponent, ApiListSimpleComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports:[
    ApiListComponent, 
    ApiDetailComponent,
    ApiListSimpleComponent
  ]
})
export class ApiModule { }
