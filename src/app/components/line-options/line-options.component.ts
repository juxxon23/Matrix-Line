import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from 'src/app/services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-line-options',
  templateUrl: './line-options.component.html',
  styleUrls: ['./line-options.component.css']
})
export class LineOptionsComponent {

  constructor(
    private fb: FormBuilder, 
		private rs :JsonManagerService,
		private router : Router,
    private route : ActivatedRoute,
  ) {}

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
          console.log({
            title: 'Unregistered user',
            confirmButtonColor: '#001935'
          });
          Swal.fire('Usuario no registrado')
					break;
				} case 'error': {
					console.log('Error');
				} 
      }
    });
  }
} 
