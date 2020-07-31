import { ToastService } from './../../services/toast.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.page.html',
	styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

	constructor(
		private router: Router, 
		private authService: AuthService,
		private toastService: ToastService
	) { }

	public userData = {
		email: ''
	}

	resetPass() {
		this.authService.forgotPassword(this.userData).subscribe((res:any) => {
			console.log('userData ' + JSON.stringify(this.userData));
			console.log('res = ' + JSON.stringify(res));
			this.toastService.presentToast(res['message']);
		});
	}
	ngOnInit() {
	}

}
