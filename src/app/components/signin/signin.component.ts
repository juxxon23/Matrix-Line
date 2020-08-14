import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

	constructor(private fb: FormBuilder) { }

	onSubmit() {
		console.log(this.signin.value)
	}
}
