import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiteOptionsComponent } from './lite-options.component';

const routes: Routes = [{ path: '', component: LiteOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiteOptionsRoutingModule { }
