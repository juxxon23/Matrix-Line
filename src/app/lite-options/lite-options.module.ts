import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiteOptionsRoutingModule } from './lite-options-routing.module';
import { LiteOptionsComponent } from './lite-options.component';


@NgModule({
  declarations: [LiteOptionsComponent],
  imports: [
    CommonModule,
    LiteOptionsRoutingModule
  ]
})
export class LiteOptionsModule { }
