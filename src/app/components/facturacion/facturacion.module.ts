import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacturacionComponent } from './facturacion.component';



@NgModule({
  declarations: [FacturacionComponent],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacturacionModule { }
