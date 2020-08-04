import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

	pages = [
		{
			title: 'sdfsd',
			url: '../login/login.module',
		},
		{
			title: 'jaberMunna',
			url: '../register/register.module'
		}
	];

	constructor() {
		console.log('menu.page.ts called');
	}

	ngOnInit() {
	}

}
