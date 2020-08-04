import { storage } from 'firebase';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private httpService: HttpService,
		private storage: Storage,
		private router: Router
	) { }

	login(postData: any): Observable<any> {
		// console.log("auth data: " + JSON.stringify(postData));
		return this.httpService.post('auth/student-login', postData);
	}
	
	signup(postData: any): Observable<any> {
		return this.httpService.post('registration/student-registration', postData);
	}

	forgotPassword(postData:any): Observable<any> {
		return this.httpService.post('auth/forget-password', postData);
	}
	
	logout() {
		let ret = this.httpService.post('auth/student-logout', null);
		this.storage.clear();
		return ret;
	} 

	getLeaderBoardList() {
		return this.httpService.get('dashboard/get-leaderboard-list');
	}
}
