import { Component, OnInit } from '@angular/core';
import { JsonManagerService } from '../../services/jsonManager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  	constructor(
  	  private rs :JsonManagerService,
  	  private router : Router,
  	  private route : ActivatedRoute
  	) { }

  	ngOnInit(): void { }

	url_options: string = 'http://127.0.0.1:5000/check';
	state: string;
	dataEx: JSON;

  	lineOptions(): void {
		this.rs.getData(this.url_options, localStorage.getItem('token')).subscribe((data:any) => {
			this.dataEx = data;
			this.state = this.dataEx['state'];
			switch(this.state) {
				case 'welcome': {
					this.router.navigate(['/lineOptions'], {relativeTo: this.route});
					console.log('Welcome');
					break;
				} case 'token': {
					this.router.navigate(['/login'], {relativeTo: this.route});
					console.log('Incorrect token, debes iniciar sesion.');
					break;
				} default: {
					console.log('Error');
				}
			}
		});
	}
}
