import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(
		private router:Router,
		private storage: Storage
	) {
		storage.get('TOKEN').then((val)=> {
			if (val) {
				this.router.navigate(['dashboard']);
			}
		});
	}

	openLoginPage(){
		this.router.navigate(['login']);
	}

}
