import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html',
  styleUrls: ['./change-state.component.css']
})
export class ChangeStateComponent {

  changeState = this.fb.group({
    document: [''],
  });

  estado : boolean = false;

  tabla(){
    this.estado = true;
  }

  headers= ["ID", "Numero De La Linea"]

  rows=[
    {
      "ID": "1",
      "Numero De La Linea": "3142184354"
    }
  ]

  constructor(private fb: FormBuilder) { }

  onSubmit() {
  }
}
