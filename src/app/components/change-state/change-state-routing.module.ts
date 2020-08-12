import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeStateComponent } from './change-state.component';

const routes: Routes = [{ path: '', component: ChangeStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeStateRoutingModule { }
