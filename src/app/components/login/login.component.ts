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
		pass_u: ['', Validators.required]
	});

	public isError= false;

	url_login : string = 'http://127.0.0.1:5000/login';	
	dataEx : JSON;
	state : string;	
	error : any;
	mensaje : string = '';

	onSubmit() {
		/* Post */
		this.rs.postData(this.url_login, this.login_client.value).subscribe((data: any) => {
			this.dataEx = data;
			localStorage.setItem("token",this.dataEx['token'])
			this.state = this.dataEx['state'];
			this.error = this.dataEx['error'];
			this.isError = false;
			switch(this.state) {
				case 'welcome': {
					this.router.navigate(['/'], {relativeTo: this.route});
					console.log('Welcome');
					break;
				} case 'password': {
					console.log('Incorrect Password');
					break;
				} case 'document': {
					console.log('Incorrect id');
					break;
				} case 'error': {
					this.isError = true;
					setTimeout(()=>{
						this.isError=false;
					},10000)
					for (const key in this.error) {
						const value = this.error[key]
						this.mensaje += '[ campo: '+key+' descripcion: ';
						for (let i = 0; i < value.length; i++) {
							const element = value[i];
							this.mensaje+=element
						}
						this.mensaje += ' ]'
					 }
					 console.log(this.mensaje)
				} default: {
					console.log('Error');
				}
			}
		});
	}
}
