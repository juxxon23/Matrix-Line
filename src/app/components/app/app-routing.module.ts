import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) }, 
	{ path: 'line', loadChildren: () => import('../line/line.module').then(m => m.LineModule) }, 
	{ path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) }, 
	{ path: 'signin', loadChildren: () => import('../signin/signin.module').then(m => m.SigninModule) },
	{ path: 'lineOptions', loadChildren: () => import('../line-options/line-options.module').then(m => m.LineOptionsModule) },
	{ path: 'facturacion', loadChildren: () => import('../facturacion/facturacion.module').then(m => m.FacturacionModule) },
	{ path: 'change-state', loadChildren: () => import('../change-state/change-state.module').then(m => m.ChangeStateModule) },
	{ path: 'registroUsuario', loadChildren: () => import('../registro-usuario/registro-usuario.module').then(m => m.RegistroUsuarioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
