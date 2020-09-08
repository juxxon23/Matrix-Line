import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from '../../services/jsonManager.service';

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html',
  styleUrls: ['./change-state.component.css']
})
export class ChangeStateComponent {

	constructor(
		private fb: FormBuilder,
  	  	private rs :JsonManagerService,
  	) {}

	/* Formulario  */
  	changeState = this.fb.group( {
  		document: ['', Validators.required],
  	});

	/* Estructura de la tabla  */
  	headers = ["Numero de Linea", "Estado de Linea"]
  	rows = []

	/* Metodo Submit: Se envia el documento ingresado al backend para obtener la lista de lineas y mostrarlas en la tabla  */
	url_change : string = 'http://127.0.0.1:5000/change'
	dataEx : JSON;
	state : string;
	color_button = [];
	onSubmit() {
		this.rows = []
	  	this.rs.postData(this.url_change,this.changeState.value).subscribe((data: any) => {
	  		this.dataEx = data;
	  		this.state = this.dataEx['state'];
	  		switch(this.state) {
	  			case 'welcome': {
	  				this.create_table(this.dataEx['data'], this.rows)
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
	
	/* Funcion que captura la linea y el id de la fila, luego envia al backend para realizar el cambio de estado  */
	dataS : JSON;
	stateS : string;
	changeStatus(linea:any, i:number):void {
		console.log(i);
		this.rs.updateData(this.url_change, linea).subscribe((data:any) => {
			this.dataS = data;
			this.stateS = this.dataS['state'];
			switch(this.stateS) {
				case 'activo': {
					this.rows[i]["Estado de Linea"] = "Activo";
					this.color_button[i] = this.color_state(this.rows[i]);
					this.tabla()
	  				console.log('Complete');
	  				break;
	  			} case 'inactivo': {
	  				this.rows[i]["Estado de Linea"] = "Inactivo";
					this.color_button[i] = this.color_state(this.rows[i]);
					this.tabla()
	  				console.log('inactivo');
	  				break;
	  			}case 'error': {
	  				console.log('Error')
	  				break;
	  			} default: {
	  				console.log('Operacion no contemplada')
	  				break;
	  			}
	  		}
	  	});
	}

	/* Funcion para crear tabla con datos recibidos */
	create_table(data_t:any, r:any) {
		this.color_button = []
		for(var i = 0; i < (data_t.length); i++) {
			this.color_button.push(this.color_state(data_t[i]));
			r.push(this.button_state(data_t[i]));
		}
		console.log(this.color_button);
		this.tabla();
	}

	/* Funcion para mostrar la tabla */
	estado : boolean = false;
	tabla() {
		this.estado = true;
	}

	/* Funcion para convertir un estado booleano en un atributo relacionado al contexto de lineas  */
	button_state(data_status: any) {
		try {
			var chang : string;
	  	  	var estado: boolean = data_status["Estado de Linea"];
	  	  	if(estado == true) {
	  	  		chang = "Activo";
	  	  	} else if(estado == false) {
	  	  		chang = "Inactivo";
	  	  	} else {
	  	  		return "No disponible";
	  	  	}
	  	} finally {
	  		data_status["Estado de Linea"] = chang;
	  		return data_status;
	  	}
	}

	/* Funcion que permite cambiar el color del boton en base al estado de la linea */
	color_state(data_status: any) {
		var estado_s : any = data_status["Estado de Linea"];
		console.log("color_state", estado_s);
		if(estado_s == true || estado_s == "Activo") {
			return "#28a745"
		} else if(estado_s == false || estado_s == "Inactivo") {
			return "#dc3545"
		} else {
			return "#ffc107"
		}
	}
}
