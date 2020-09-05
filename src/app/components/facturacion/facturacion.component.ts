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

  estado : boolean = false;
  tabla(){
    this.estado = true;
  }

  headers = ["Documento", "Numero De La Linea", "Fecha Emision", "Valor"]

  rows = [
    {
      "Documento": "1094972663",
      "Numero De La Linea": "3142184354",
      "Fecha Emision": "4/09/2020",
      "Valor": "20,000"
    },
    {
      "Documento": "1234122234",
      "Numero De La Linea": "3142234514",
      "Fecha Emision": "5/10/2020",
      "Valor": "10,000"
    }
  ]

  constructor(private fb: FormBuilder) { }

  onSubmit() {
  }
}
