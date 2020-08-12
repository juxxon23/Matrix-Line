import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineOptionsComponent } from './line-options.component';

const routes: Routes = [{ path: '', component: LineOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineOptionsRoutingModule { }
