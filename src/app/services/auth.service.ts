import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from './../config/auth-constants'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private httpService: HttpService,
		private storageService: StorageService,
		private router: Router
	) { }

	login(postData: any): Observable<any> {
		// console.log("auth data: " + JSON.stringify(postData));
		return this.httpService.post('auth/student-login', postData);
	}
	
	signup(postData: any): Observable<any> {
		return this.httpService.post('registration/student-registration', postData);
	}
	
	logout() {
		this.storageService.clear();
		// this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
		// 	this.router.navigate(['/login']); 	
		// });
	} 	
}
