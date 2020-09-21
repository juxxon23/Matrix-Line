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

	public isError= false;

  constructor(
  	  private fb: FormBuilder,
  	  private rs :JsonManagerService,
  	  private router : Router,
  	  private route : ActivatedRoute
	) { }

  url_line : string = 'http://127.0.0.1:5000/line';	
  dataEx : JSON;
  state : string;
  error : any;
  mensaje : string = '';
  onSubmit() {
  	  /* Post */ 
  	  this.rs.postData(this.url_line,this.line.value).subscribe((data:any) => {
  	  	  this.dataEx = data;
			  this.state = this.dataEx['state'];
			  this.error = this.dataEx['error'];
  	  	  switch(this.state) {
  	  	  	  case 'welcome': {
  	  	  	  	  this.router.navigate(['/lineOptions'], {relativeTo: this.route});
  	  	  	  	  console.log('Welcome');
  	  	  	  	  break;
  	  	  	  } case 'error': {
				this.isError = true;
				setTimeout(()=>{
					this.isError=false;
				},10000)
				for (const key in this.error) {
					const value = this.error[key]
					this.mensaje += '[ campo: '+key+' descripcion: ';
					for (let i = 0; i < value.length; i++) {
						const element = value[i];
						this.mensaje+=element
					}
					this.mensaje +=' ]'
				 }
				 console.log(this.mensaje)
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
  	  });
  }
}
