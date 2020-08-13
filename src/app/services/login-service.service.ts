import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  	constructor(private http: HttpClient) { }
	
	url: string = 'http://127.0.0.1:5000/login';

	getLogin() {
		return this.http.get(this.url)	
	}

}
