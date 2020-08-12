import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
	{ path: 'line', loadChildren: () => import('./components/line/line.module').then(m => m.LineModule) }, 
	{ path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, 
	{ path: 'signin', loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule) },
	{ path: 'lineOptions', loadChildren: () => import('./components/line-options/line-options.module').then(m => m.LineOptionsModule) },
	{ path: 'facturacion', loadChildren: () => import('./components/facturacion/facturacion.module').then(m => m.FacturacionModule) },
	{ path: 'registerClient', loadChildren: () => import('./components/register-client/register-client.module').then(m => m.RegisterClientModule) },
	{ path: 'actualizarEstado', loadChildren: () => import('./actualizar-estado/actualizar-estado.module').then(m => m.ActualizarEstadoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
