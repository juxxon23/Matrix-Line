import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	login = this.fb.group({
		user: [''],
		pass: ['']
	});

  	constructor(private fb: FormBuilder) { }
	
}
