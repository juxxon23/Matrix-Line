import { Component, OnInit } from '@angular/core';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  	constructor(
  	  private rs :JsonManagerService,
  	  private router : Router,
  	) { }

  	ngOnInit(): void { }

	url_options: string = 'http://127.0.0.1:5000/check';
	state: string;
	dataEx: JSON;

	verify_token(ruta:string):void {
		this.rs.getData(this.url_options, localStorage.getItem('token')).subscribe((data:any) => {
			this.dataEx = data;
			this.state = this.dataEx['state'];
			switch(this.state) {
				case 'welcome': {
					localStorage.removeItem('token');
					this.router.navigate(['/']);
					console.log('Sesion cerrada');
					break;
				} case 'token': {
					this.router.navigate([ruta]);
					break;
				} default: {
					console.log('Error');
				}
			}
		});
	}
}
