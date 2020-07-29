import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http/';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	myToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzMTQzNDMsImV4cCI6MTU5OTY3MTE0MywianRpIjoiNmRXNTcxQWw5dXdONThabHB6S0huMSIsInVzZXIiOnsibmFtZSI6ImZhcmlkMiIsImlkIjoxNn19.D2o_TukHPvgU_r10KK9S9V4UEwfWJbAkpDt8Ge1AKTg";
	authenticationState = new BehaviorSubject(false);

	constructor(
		private storage: Storage,
		private plt: Platform,
		private http: HttpClient
	) {
		this.plt.ready().then(()=> {
			this.checkToken();
		});
	}

	login(user):boolean {
		let ret: boolean;

		this.http.post(`http://api.lumosbd.com/v1/auth/student-login`, user).subscribe(res => {
			console.log("here");
			console.log(JSON.stringify(res));

			if (res) {
				return this.storage.set(TOKEN_KEY, `Bearer ${res['token']}`).then( res => {
					this.authenticationState.next(true);
				});
				ret = false;
			}
			else {
				ret = true;
			}
		});
		return ret;
	}

	logOut() {
		return this.storage.remove(TOKEN_KEY).then( ()=> {
			this.authenticationState.next(false);
		});
		
	}

	isAuthenticated() {
		return this.authenticationState.value;
	}

	checkToken() {
		return this.storage.get(TOKEN_KEY).then( res => {
			if (res) {
				this.authenticationState.next(true);
			}
		})
	}
}
