import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcDetailComponent } from './pc-detail/pc-detail.component';
import { PcListComponent } from './pc-list/pc-list.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PcDetailComponent, PcListComponent],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    PcDetailComponent,
    PcListComponent
  ]
})
export class PcModule { }
