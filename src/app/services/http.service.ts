import { ToastService } from './toast.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class HttpService {
	headers = new HttpHeaders();
	options = {headers: this.headers, withCredintials: false};

	constructor(private http:HttpClient) {}

	post(serviceName: string, data:any) {
		this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
		this.headers.append('Access-Control-Allow-Origin' , '*');
		this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
		this.headers.append('Accept','application/json');
		const url = environment.apiUrl + serviceName;
		// console.log('url: ' + url + ' data: ' + JSON.stringify(data));
		return this.http.post(url, JSON.stringify(data), this.options);
	}
}
