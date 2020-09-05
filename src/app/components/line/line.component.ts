import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';


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
		legalState: ['', Validators.required],
		brand: ['', Validators.required],
		description: ['']
	});

  constructor(
  	  private fb: FormBuilder,
  	  private rs :JsonManagerService,
  	  private router : Router,
  	  private route : ActivatedRoute
	) { }

  url_login : string = 'http://127.0.0.1:5000/line';	
  dataEx : JSON;
  state : string;

  onSubmit() {
  	  /* Post 
  	  this.rs.postData(this.url_login,this.line.value).subscribe(data => {
  	  	  this.dataEx = data as JSON;
  	  	  this.state = this.dataEx['state'];
  	  	  switch(this.state) {
  	  	  	  case 'welcome': {
  	  	  	  	  this.router.navigate(['/'], {relativeTo: this.route});
  	  	  	  	  console.log('Welcome');
  	  	  	  	  break;
  	  	  	  } case 'error': {
  	  	  	  	  console.log('No se pudo procesar el registro');
  	  	  	  	  break;
  	  	  	  } case 'line': {
  	  	  	  	  console.log('La linea ya existe');
  	  	  	  	  break;
  	  	  	  } case 'document':{
  	  	  	  	  console.log('El usuario no se encuentra registrado');
  	  	  	  	  this.router.navigate(['/registroUsuario'],{relativeTo: this.route});
  	  	  	  } default: {
  	  	  	  	  console.log('Error');
  	  	  	  }
  	  	  }
  	  });*/
  }
}
