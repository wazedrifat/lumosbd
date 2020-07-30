import { ToastService } from './toast.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class HttpService {
	headers = new HttpHeaders({
		// 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzMTQzNDMsImV4cCI6MTU5OTY3MTE0MywianRpIjoiNmRXNTcxQWw5dXdONThabHB6S0huMSIsInVzZXIiOnsibmFtZSI6ImZhcmlkMiIsImlkIjoxNn19.D2o_TukHPvgU_r10KK9S9V4UEwfWJbAkpDt8Ge1AKTg'
	});
	options = {headers: this.headers, withCredintials: false};

	constructor(private http:HttpClient) {}

	post(serviceName: string, data:any) {
		const url = environment.apiUrl + serviceName;
		// console.log('url: ' + url + ' data: ' + JSON.stringify(data));
		return this.http.post(url, JSON.stringify(data), this.options);
	}
}
