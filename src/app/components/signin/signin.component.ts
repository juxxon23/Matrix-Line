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

	signin = this.fb.group({
		name: ['', Validators.required],
		lastName: ['', Validators.required],
		id: ['', Validators.required],
		pass: ['', Validators.required],
		numberPhone: ['', Validators.required],
	});

	constructor(
		private fb: FormBuilder,
		private rs :JsonManagerService,
		private router : Router,
		private route : ActivatedRoute
	) { }
	
	url_signin : string = 'http://127.0.0.1:5000/signin'
	dataEx : JSON;
	onSubmit() {
			/* Metodo post */
			this.rs.postData(this.url_signin,this.signin.value).subscribe(data => {
			this.dataEx = data as JSON;
			if(this.dataEx['state'] == 'welcome') {
				this.router.navigate(['/'], {relativeTo: this.route});
			} else {
				console.log(this.dataEx);
			}
		});
	}
}
