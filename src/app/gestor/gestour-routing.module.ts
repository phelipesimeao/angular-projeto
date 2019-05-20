import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CadfuncionarioComponent } from './cadfuncionario/cadfuncionario.component';
import { PcDetailComponent } from '../pc/pc-detail/pc-detail.component';

const gestRoutes: Routes = [
  { 
    path: '', 
    component: IndexComponent
  },
  {
    path: 'cadastro-funcionario',
    component: CadfuncionarioComponent
  },
  {
    path: 'detalhe/:id',
    component: PcDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(gestRoutes)],
  exports: [RouterModule]
})
export class GestorRoutingModule { }
