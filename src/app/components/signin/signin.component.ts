import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent {

	constructor(
		private fb: FormBuilder,
		private rs :JsonManagerService,
		private router : Router,
		private route : ActivatedRoute
	) { }

	signin = this.fb.group({
		name: ['', Validators.required],
		lastName: ['', Validators.required],
		id: ['', Validators.required],
		pass: ['', Validators.required],
		numberPhone: ['', Validators.required],
	});

	
	url_signin : string = 'http://127.0.0.1:5000/signin'
	dataEx : JSON;
	state : string;

	onSubmit() {
			/* Metodo post */
			this.rs.postData(this.url_signin,this.signin.value).subscribe(data => {
			this.dataEx = data as JSON;
			this.state = this.dataEx['state'];
			switch(this.state) {
				case 'welcome': {
					this.router.navigate(['/login'], {relativeTo: this.route});
					console.log('Complete');
					break;
				} case 'error': {
					console.log('Error')
					break;
				} default: {
					console.log('Operacion no contemplada')
					break;
				}
			}
		});
	}
}
