import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent {

	constructor(
		private fb: FormBuilder,
		private rs :JsonManagerService,
		private router : Router,
		private route : ActivatedRoute
	) { }

	signin = this.fb.group({
		name: ['', Validators.required],
		lastName: ['', Validators.required],
		id_u: ['', Validators.required],
		pass_u: ['', Validators.required],
		numberPhone: ['', Validators.required],
	});

	public isError= false;
	
	url_signin : string = 'http://127.0.0.1:5000/signin'
	dataEx : JSON;
	state : string;
	error : any;
	mensaje : string = '';
	onSubmit() {
			/* Metodo post */
			this.rs.postData(this.url_signin,this.signin.value).subscribe((data: any) => {
			this.dataEx = data;
			this.state = this.dataEx['state'];
			this.error = this.dataEx['error'];
			this.isError = false;
			switch(this.state) {
				case 'welcome': {
					this.router.navigate(['/login'], {relativeTo: this.route});
					console.log('Complete');
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
				} default: {
					console.log('operacion no completada')
					break;
				}
			}
		});
	}
}
