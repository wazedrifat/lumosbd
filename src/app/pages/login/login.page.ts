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

// 	login() {

//         var data1 = 'user_name=' + encodeURIComponent(this.postData.user_name) +
//                    '&password=' + encodeURIComponent(this.postData.password);

//         var link = environment.apiUrl + 'auth/login';

//         var headers = new Headers();
//         headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
//         let options = new RequestOptions({ headers: headers });

//         if(this.username == ''){

//           this.showToast('Enter username');

//         }else if(this.password == ''){

//           this.showToast('Enter password');

//         }else{

//           this.http.post(link, data1, options)
//           .subscribe(data => {

              


//               if(data.json().error == true){

//                 console.log(data.json().message);
//               }else if(data.json().error == false){

//                 this.showToast(data.json().message);
//                 console.log(data.json());
//                 this.navCtrl.setRoot(DashboardPage);
//                 this.storage.set('token', data.json().token);
//                 this.storage.set('user_name', data.json().user.name);
//               }              
              
//           }, error => {
//               console.log("Oooops!");
//           });
//         }
                
//   }

	loginAction() {
		//JSON.stringify
		console.log('postData' + JSON.stringify(this.postData));
		// this.router.navigate(['dashboard']);
		if (this.validateInputs()) {
			// this.toastService.presentToast('entered'); //to this is ok
			this.authService.login(this.postData).subscribe((res: any) => {
				this.toastService.presentToast('res');// + JSON.stringify(res));
				this.openDashboard();
				// if (res.user) {
				// 	// this.storageService.store(AuthConstants.AUTH, res.userData);
				// 	this.openDashboard();
				// }
				// else {
				// 	this.toastService.presentToast('Incorrect username or password');
				// }
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
