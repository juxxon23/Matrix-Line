import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  	
	constructor(
		private fb: FormBuilder, 
		private rs :JsonManagerService,
		private router : Router,
		private route : ActivatedRoute
	) {}

	login_client = this.fb.group({
		document: ['', Validators.required],
		pass: ['', Validators.required]
	});

	url_login : string = 'http://127.0.0.1:5000/login';	
	dataEx : JSON;
	onSubmit() {
		/* Metodo delete
		   this.rs.deleteData(this.url_login, this.login_client.get('pass').value).subscribe(data => {
			this.dataEx = data as JSON;
			console.log(this.dataEx);
		});
		*/
		/* Metodo put
		   this.rs.updateData(this.url_login, this.login_client.value).subscribe(data => {
	this.dataEx = data as JSON;
	console.log(this.dataEx);
		});*/
		/* Metodo post
		this.rs.postData(this.url_login,this.login_client.value).subscribe(data => {
			this.dataEx = data as JSON;
			if(this.dataEx['state'] == 'welcome') {
				this.router.navigate(['/'], {relativeTo: this.route});
			} else {
				console.log(this.dataEx);
			}
		});*/
	   /* Metodo get
	   	  this.rs.getData(this.url).subscribe(data => {
	   	  	this.dataEx = data as JSON;
	   	  	console.log(this.dataEx);
	   	  })*/
	}
}
