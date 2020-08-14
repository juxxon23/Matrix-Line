import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChangeStateRoutingModule } from './change-state-routing.module';
import { ChangeStateComponent } from './change-state.component';



@NgModule({
  declarations: [ChangeStateComponent],
  imports: [
    CommonModule,
    ChangeStateRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChangeStateModule { }
