import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	
	constructor(private fb: FormBuilder, private rs :LoginService) {
	}

	login_client = this.fb.group({
		document: ['', Validators.required],
		pass: ['', Validators.required]
	});
	dataEx: JSON;
	onSubmit() {
		this.rs.getLogin().subscribe(data => {
			this.dataEx = data as JSON;
			console.log(this.dataEx);
		})
	}
}
