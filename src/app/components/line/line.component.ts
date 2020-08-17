import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  
  	line = this.fb.group({
    	document: ['', Validators.required],
    	numberLine: ['', Validators.required],
    	namePhone: ['', Validators.required],
		legalState: ['', Validators.required]
	});

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.log(this.line.value);
  }

}
