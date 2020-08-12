import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 	line = this.fb.group({
    	documento: [''],
    	numberLine: [''],
		state: [''],
		namePhone: [''],
		legalState: ['']
	});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
