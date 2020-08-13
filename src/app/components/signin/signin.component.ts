import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
	
	signin = this.fb.group({
		name: [''],
    	lastName: [''],
    	id: [''],
    	numberPhone: [''],
    });
  
  	constructor(private fb: FormBuilder) { }

}
