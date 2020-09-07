import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from 'src/app/services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent {

  constructor(
    private fb: FormBuilder, 
		private rs :JsonManagerService,
		private router : Router,
		private route : ActivatedRoute
  ) {}

  facturacion = this.fb.group({
    document: ['', Validators.required],
    date: ['',Validators.required]
  });

  estado : boolean = false;
  tabla(){
    this.estado = true;
  }

  url_bill : string = 'http://127.0.0.1:5000/bill';	
	dataEx : JSON;
	state : string;	

  headers = ["Documento", "Numero De La Linea", "Fecha Emision", "Valor"]

  onSubmit() {
    this.rs.postData(this.url_bill, this.facturacion.value).subscribe((data : any) => {
      this.dataEx = data;
      this.state = this.dataEx['state'];
      switch (this.state) {
        case 'welcome':
          console.log('Bill user')
          break;
        case 'document':{
          console.log('Unregistred user')
          break;
        }
        case 'error': {
          console.log('error')
        }
      }
    })
  }
}
