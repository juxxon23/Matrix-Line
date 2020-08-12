import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClientRoutingModule } from './register-client-routing.module';
import { RegisterClientComponent } from './register-client.component';


@NgModule({
  declarations: [RegisterClientComponent],
  imports: [
    CommonModule,
    RegisterClientRoutingModule
  ]
})
export class RegisterClientModule { }
