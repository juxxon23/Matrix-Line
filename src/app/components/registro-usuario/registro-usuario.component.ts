import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

  registroUsuario = this.fb.group({
		name: [''],
    lastName: [''],
    id: [''],
    numberPhone: [''],
	});

  	constructor(private fb: FormBuilder) { }

}
