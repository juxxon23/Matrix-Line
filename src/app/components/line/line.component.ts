import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  signin = this.fb.group({
	nome: [''],
    lastName: [''],
    id: [''],
    numberPhone: [''],
    date: ['']
	});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
