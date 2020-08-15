import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent {

  facturacion = this.fb.group({
    document: [''],
    date: ['']
  });

  estado=false

  tabla(){
    this.estado =! this.estado;
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
  }
}
