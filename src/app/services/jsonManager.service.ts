import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonManagerService {

  	constructor(public http: HttpClient) { }

	postData(url:string, dataEx:JSON) {
		return this.http.post(url, dataEx); 
	}

	getData(url:string) {
		return this.http.get(url);
	}

	updateData(url:string, dataEx:JSON) {
		return this.http.put(url,dataEx);
	}

	deleteData(url:string, dataEx:string) {
		return this.http.delete(url, {
			params: {
				id: dataEx
			}
		});
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
