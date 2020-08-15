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

  constructor(private fb: FormBuilder) { }

  onSubmit() {
  }
}
