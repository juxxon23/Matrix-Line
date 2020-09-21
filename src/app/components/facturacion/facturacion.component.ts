import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from 'src/app/services/jsonManager.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent {

  constructor(
    private fb: FormBuilder, 
		private rs :JsonManagerService,
  ) {}

  facturacion = this.fb.group({
    document: ['', Validators.required],
    date: ['',Validators.required]
  });
  
  estado : boolean = false;
  tabla(){
    this.estado = true;
  }

  getLine(linea:any):void{
    console.log(linea["Numero de Linea"]);
  }

  url_bill : string = 'http://127.0.0.1:5000/bill';	
	dataEx : JSON;
	state : string;	

  headers = ["Id", "Numero de Linea", "Fecha Emision", "Valor", "Eliminar"]
  rows = []

  onSubmit() {
    this.rows = []
    /*Metodo post*/
    this.rs.postData(this.url_bill, this.facturacion.value).subscribe((data : any) => {
      this.dataEx = data;
      this.state = this.dataEx['state'];
      switch (this.state) {
        case 'welcome':
          for(var i = 0; i < (this.dataEx['data'].length); i++) {
            this.rows.push(this.dataEx['data'][i]);
          }
          this.tabla()
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

  delete(factura:any, id_row:number){
    this.rs.deleteData(this.url_bill, factura['Id']).subscribe((data:any) => {
      this.dataEx = data;
      this.state = this.dataEx['state'];
      switch (this.state) {
        case 'ok':  
          if (factura['Id'] == this.rows[id_row]['Id']) {
            this.rows.splice(id_row, 1);
            this.tabla()
          }
          console.log('delete')
          break;
        case 'document':{
          console.log('Unregistred user')
          break;
        }
        case 'error': {
          console.log('error')
        }
      }
    });
  }
}
