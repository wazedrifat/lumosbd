import { environment } from './../../../environments/environment.prod';
import { ToastService } from './../../services/toast.service';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constants';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	constructor(
		private router: Router, 
		private authService: AuthService,
		private storageService: StorageService,
		private toastService: ToastService
	) { }

	public postData = {
		// Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzMTQzNDMsImV4cCI6MTU5OTY3MTE0MywianRpIjoiNmRXNTcxQWw5dXdONThabHB6S0huMSIsInVzZXIiOnsibmFtZSI6ImZhcmlkMiIsImlkIjoxNn19.D2o_TukHPvgU_r10KK9S9V4UEwfWJbAkpDt8Ge1AKTg',
		user_name: '',
		password: ''
	}
	
	openForgotPassowrdPage(){

		this.router.navigate(['forgot-password']);
	}

	openRegisterPage(){

		this.router.navigate(['register']);
	}

	validateInputs() {
		let username = this.postData.user_name.trim();
		let password = this.postData.password.trim();
		return (
			this.postData.user_name &&
			this.postData.password &&
			username.length > 0 &&
			password.length > 0
		);
	}

	openDashboard(){

		this.router.navigate(['dashboard']);
	}

	loginAction() {

		console.log('postData' + JSON.stringify(this.postData));

		if (this.validateInputs()) {

			this.authService.login(this.postData).subscribe((res: any) => {
				// this.toastService.presentToast('res');
				// this.openDashboard();
				console.log(JSON.stringify(res));

				if (res.user) {
					this.storageService.store(AuthConstants.AUTH, res.userData);
					this.openDashboard();
				}
				else {
					this.toastService.presentToast('Incorrect username or password');
				}
			}),
			(error: any) => {
				this.toastService.presentToast('Connection Error');
			}
		}
		else {
			this.toastService.presentToast('Please give both information');
		}
	}


	ngOnInit() {
	}


}
