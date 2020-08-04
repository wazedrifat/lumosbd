import { ToastService } from './../../services/toast.service';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
	public userData = {
		bmdc_no: '',
		group_id: '19',
		username: '',
		name: '',
		mobile: '',
		alt_mobile: '',
		email: '',
		address: '',
		password: ''
	}

	constructor(
		private router: Router,
		private route: ActivatedRoute, 
		private authService: AuthService,
		private toastService: ToastService,
	) {
		this.route.params.subscribe(params => {
			console.log(JSON.stringify(params));
			this.userData['username'] = params['name'];
			this.userData['name'] = params['name'];
			this.userData['mobile'] = params['mobile'];
			this.userData['alt_mobile'] = params['alt_mobile'];
			this.userData['email'] = params['email'];
			this.userData['address'] = params['address'];
		})
	}

	

	submit() {
		// console.log("registration sumitted ", JSON.stringify(this.userData));

		this.authService.signup(this.userData).subscribe((res:any) => {
			// console.log('userData' + JSON.stringify(this.userData));
			// console.log('res' + JSON.stringify(res));
			this.toastService.presentToast(res['message']);
		}),
		(error: any) => {
			this.toastService.presentToast('Information is invalid or already exists');
		}
	}

	ngOnInit() {
	}

}
