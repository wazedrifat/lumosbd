import { AuthConstants } from './../config/auth-constants';
import { Storage } from '@ionic/storage';
import { ToastService } from './toast.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/';
import { environment } from '../../environments/environment';
import { storage } from 'firebase';

@Injectable({
	providedIn: 'root'
})

export class HttpService {
	constructor(
		private http:HttpClient,
		private storage: Storage
	) {}

	post(serviceName: string, data:any) {
		let headers = new HttpHeaders({
			'Authorization': AuthConstants.savedToken
		});
		let options = {headers: headers};
		const url = environment.apiUrl + serviceName;
		return this.http.post(url, JSON.stringify(data), options);
	}

	get(serviceName: string) {
		let headers = new HttpHeaders({
			'Authorization': AuthConstants.savedToken
		});
		let options = {headers: headers};
		const url = environment.apiUrl + serviceName;
		return this.http.get(url, options);
		
	}
}
