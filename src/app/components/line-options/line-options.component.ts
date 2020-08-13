import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-line-options',
  templateUrl: './line-options.component.html',
  styleUrls: ['./line-options.component.css']
})
export class LineOptionsComponent {

  lineOptions = this.fb.group({
		document: [''],
	});

  	constructor(private fb: FormBuilder) { }

}
