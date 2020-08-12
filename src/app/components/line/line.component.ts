import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  
  	line = this.fb.group({
		nome: [''],
    	lastName: [''],
    	id: [''],
    	numberPhone: [''],
    	date: [''],
		state: [''],
		namePhone: [''],
		legalState: ['']
	});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
