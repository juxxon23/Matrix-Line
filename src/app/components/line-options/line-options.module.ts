import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineOptionsRoutingModule } from './line-options-routing.module';
import { LineOptionsComponent } from './line-options.component';


@NgModule({
  declarations: [LineOptionsComponent],
  imports: [
    CommonModule,
    LineOptionsRoutingModule
  ]
})
export class LineOptionsModule { }
