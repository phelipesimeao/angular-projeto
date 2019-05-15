import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcDetailComponent } from './pc/pc-detail/pc-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/Guards/auth.guard';

const routes: Routes = [
  // { path: 'detalhe', component: PcDetailComponent},
  { 
    path: 'gestor', 
    loadChildren: 'src/app/gestor/gestor.module#GestorModule', 
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },

  { 
    path: 'dev', 
    loadChildren: 'src/app/desenvolvedor/desenvolvedor.module#DesenvolvedorModule', 
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },

  { 
    path: '', 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
