import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';



@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    LineRoutingModule,
    ReactiveFormsModule
  ]
})
export class LineModule { }
