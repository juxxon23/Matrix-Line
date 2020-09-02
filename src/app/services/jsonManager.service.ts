import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonManagerService {

  	constructor(public http: HttpClient) { }
	
	/* Get */
	getData(url:string) {
		return this.http.get(url);
	}
	
	/* Post con Json */
	postData(url:string, dataEx?:any, token?:string) {
		let config: any = {
			responseType: "json"
		}
		if (token) {
			const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
			config['header'] = header;
		}
		return this.http.post(url, dataEx, config); 
	}
	
	/* Put con Json */
	updateData(url:string, dataEx:JSON) {
		return this.http.put(url,dataEx);
	}

	/* Delete con parametros de consulta */
	deleteData(url:string, dataEx:string) {
		return this.http.delete(url, {
			params: {
				id: dataEx
			}
		});
	}

	/* Get con parametros de consulta */
	getState(url:string, user:string, passclient:string) {
		return this.http.get(url, {
			params: {
				'idclient' : user,
				'passclient' : passclient
			}
		})	
	}
}
