import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TitulosComponent } from './titulos/titulos.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/Login', pathMatch: 'full'
  },
  {
    path: 'usuarios', component: UsuariosComponent 
  },
  {
    path: 'Login', component: TitulosComponent
  },
  {
    path: 'CambiarContrasena', component: CambiarContrasenaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
