import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	
	constructor(private fb: FormBuilder, private httpClient: HttpClient) { 
	
	}
	
	url: string = 'http://127.0.0.1:5000/';

	login_client = this.fb.group({
		document: ['', Validators.required],
		pass: ['', Validators.required]
	
	});


	onSubmit() {
		console.log(this.login_client.value);

	}
}
