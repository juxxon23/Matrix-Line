import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html',
  styleUrls: ['./change-state.component.css']
})
export class ChangeStateComponent {

    constructor(
  	  private fb: FormBuilder,
  	  private rs :JsonManagerService,
  	  private router : Router,
  	  private route : ActivatedRoute
  	) {}
	
	changeState = this.fb.group({
	    document: ['', Validators.required],
	  });

	  estado : boolean = false;
	  tabla(){
	    this.estado = true;
	  }

	  button_state(data_status: any){
	  	  try {
	  	  	  var chang : string;
	  	  	  var estado: boolean = data_status["Estado de Linea"];
	  	  	  if(estado == true){
	  	  	  	  chang = "Activo";
	  	  	  } else if(estado == false){
	  	  	  	  chang = "Inactivo";
	  	  	  } else {
	  	  	  	  return "Error";
	  	  	  }
	  	  } finally {
	  	  	  data_status["Estado de Linea"] = chang;
	  	  	  return data_status;
	  	  }
	  }

	  getLine(linea:any):void{
	  	  console.log(linea["Numero de Linea"]);
	  }

	  headers = ["Numero de Linea", "Estado de Linea"]
	  rows = []
	  url_signin : string = 'http://127.0.0.1:5000/change'
	  dataEx : JSON;
	  state : string;
	  onSubmit() {
	  	  	this.rows = []
	  		/* Metodo post */ 
	  		this.rs.postData(this.url_signin,this.changeState.value).subscribe((data: any) => {
	  		this.dataEx = data;
	  		this.state = this.dataEx['state'];
	  		switch(this.state) {
	  			case 'welcome': {
	  				for(var i = 0; i < (this.dataEx['data'].length); i++) {
	  					this.rows.push(this.button_state(this.dataEx['data'][i]));
	  				}
	  				this.tabla()
	  				console.log('Complete');
	  				break;
	  			} case 'error': {
	  				console.log('Error')
	  				break;
	  			} default: {
	  				console.log('Operacion no contemplada')
	  				break;
	  			}
	  		}
	  	});
	  }



}
