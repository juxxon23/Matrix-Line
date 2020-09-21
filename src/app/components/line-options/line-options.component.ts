import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from 'src/app/services/jsonManager.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-line-options',
  templateUrl: './line-options.component.html',
  styleUrls: ['./line-options.component.css']
})
export class LineOptionsComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
	private rs :JsonManagerService,
	private router : Router,
  ) {}

  ngOnInit():void {
  	  this.verify_token('lineOptions');
  }

  lineOptions = this.fb.group({
    document: ['', Validators.required],
  });

  url_lineOptions : string = 'http://127.0.0.1:5000/consultUser';
  dataEx : JSON;
  state : string;

  onSubmit() {
    /* Post */
    this.rs.postData(this.url_lineOptions, this.lineOptions.value).subscribe((data: any) => {
      this.dataEx = data;
      this.state = this.dataEx['state'];
      switch(this.state){
        case 'welcome':{
          console.log('Registered user');
          Swal.fire({
            title: 'Usuario registrado',
            confirmButtonColor: '#001935'
          })
          break;
        } case 'document': {
          Swal.fire({
            title: 'Usuario no registrado',
            confirmButtonColor: '#001935'
          });
          break;
		} case 'error': {
			console.log('Error');
		} 
      }
    });
  }

  url_options : string = 'http://127.0.0.1:5000/check';
  verify_token(ruta:string):any {
  	  this.rs.getData(this.url_options, localStorage.getItem('token')).subscribe((data:any) => {
  	  	  this.dataEx = data;
  	  	  this.state = this.dataEx['state'];
  	  	  switch(this.state) {
  	  	  	  case 'welcome': {
  	  	  	  	  this.router.navigate([ruta]);
  	  	  	  	  console.log('Welcome');
  	  	  	  	  break;
  	  	  	  } case 'token': {
  	  	  	  	  Swal.fire({
  	  	  	  	  	  title: 'Debe iniciar sesion para continuar',
  	  	  	  	  	  confirmButtonColor: '#001935'
  	  	  	  	  })
  	  	  	  	  this.router.navigate(['/login']);
  	  	  	  	  console.log('Incorrect token, debes iniciar sesion.');
  	  	  	  	  break;
  	  	  	  } default: {
  	  	  	  	  console.log('Error');
  	  	  	  }
  	  	  }
  	  });
  }
} 
