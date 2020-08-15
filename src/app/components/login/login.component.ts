import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	
	constructor(private fb: FormBuilder, private rs :LoginService) {}

	login_client = this.fb.group({
		document: ['', Validators.required],
		pass: ['', Validators.required]
	});
	

	/*idclient : string;
	passclient : string;*/
	dataEx : JSON;

	onSubmit() {
		this.rs.postData(this.login_client.value).subscribe(data => {
			this.dataEx = data as JSON;
			console.log(this.dataEx['pass'])
		});
		/*this.rs.getData().subscribe(data => {
			this.dataEx = data as JSON;
			console.log(this.dataEx);
		})*/
		/*  Prueba get parametros
		this.idclient = this.login_client.get('document').value;
		this.passclient = this.login_client.get('pass').value;	
		this.rs.getState(this.idclient, this.passclient).subscribe(data => {
			this.dataEx = data as JSON;
			console.log(this.dataEx);
		})*/
	   
	}
}
