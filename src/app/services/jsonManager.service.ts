import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonManagerService {

  	constructor(public http: HttpClient) { }
	
	postData(url:string, data_login:JSON) {
		return this.http.post(url, data_login); 
	}

	getData(url:string) {
		return this.http.get(url);
	}
	/* Get con parametros de consulta
	getState(user:string, passclient:string) {
		return this.http.get(this.url, {
			params: {
				'idclient' : user,
				'passclient' : passclient
			}
		})	
	}*/
}
