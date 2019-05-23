import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestorGuard } from './shared/Guards/gestor.guard';
import { DevGuard } from './shared/Guards/dev.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: 'detalhe', component: PcDetailComponent},
  { 
    path: 'gestor', 
    loadChildren: 'src/app/gestor/gestor.module#GestorModule', 
    canLoad: [GestorGuard],
    canActivate: [GestorGuard],
    canActivateChild: [GestorGuard]
  },

  { 
    path: 'dev', 
    loadChildren: 'src/app/desenvolvedor/desenvolvedor.module#DesenvolvedorModule', 
    canLoad: [DevGuard],
    canActivate: [DevGuard],
    canActivateChild: [DevGuard]
  },

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
