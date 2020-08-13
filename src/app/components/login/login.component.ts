import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	
	constructor(private fb: FormBuilder) { 
	
	}

	login_client = this.fb.group({
		user: ['', Validators.required],
		pass: ['', Validators.required]
	
	});


	onSubmit() {
		console.log(this.login_client.value);

	}
}
