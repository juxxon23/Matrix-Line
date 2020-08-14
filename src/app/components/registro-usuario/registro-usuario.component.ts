import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  
  constructor(private fb: FormBuilder){}

  registroUsuario = this.fb.group({
		name: ['', Validators.required],
    lastName: ['', Validators.required],
    id: ['', Validators.required],
    numberPhone: ['', Validators.required],
    date:['']
	});

  onSubmit(){
  }

}
