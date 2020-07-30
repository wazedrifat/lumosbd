import { environment } from './../../../environments/environment.prod';
import { ToastService } from './../../services/toast.service';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constants';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
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
		private toastService: ToastService,
		private googlePlus: GooglePlus,
		private fb:Facebook
	) { }

	public postData = {
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
		if (this.validateInputs()) {
			// console.log('postData' + JSON.stringify(this.postData));

			this.authService.login(this.postData).subscribe((res: any) => {
				console.log('postData' + JSON.stringify(this.postData));
				console.log('res' + JSON.stringify(res));
				
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

	facebookLogin() {
		this.fb.login(['public_profile', 'email'])
			.then((res: FacebookLoginResponse) => {
				console.log('Logged into Facebook!', res);
				this.toastService.presentToast(JSON.stringify(res));
			})
			.catch(e => console.log('Error logging into Facebook', e));


		this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
	}

	googleLogin() {
		console.log("google buttone clicked");
		this.googlePlus.login({})
			.then(res => {
				console.log(res);
				this.toastService.presentToast(JSON.stringify(res));
				this.openDashboard();
			})
			.catch(err => console.error(err));
	}

	ngOnInit() {
	}


}
