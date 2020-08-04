import { AuthConstants } from './config/auth-constants';
import { Storage } from '@ionic/storage';
import { CardviewPage } from './pages/dashboard/flashcard/cardview/cardview.page';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	navigate : any;
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private storage: Storage,
		private auth: AuthConstants
	) {
		this.sideMenu();
		this.initializeApp();
		this.storage.get(AuthConstants.token).then((val) => {
			if (val) {
				AuthConstants.savedToken = val;
			}
		});

	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	sideMenu()
	{
		this.navigate = [
			{
				title	: "Dashboard",
				url 	: "/dashboard",
				icon	: "home"
			},
			{
				title	: "My Profile",
				url 	: "/dashboard/my-profile",
				icon 	: "person"
			},
			{
				title 	: "Flash Card",
				url 	: "/dashboard/flashcard",
				icon 	: "card"
			},
			{
				title 	: "My Stats",
				url 	: "/dashboard/my-stats",
				icon 	: "stats"
			},
			{
				title 	: "My Contents",
				url 	: "/dashboard/my-contents",
				icon 	: "cube"
			},
			{
				title 	: "Notes",
				url 	: "/dashboard/notes",
				icon 	: "document"
			},
			{
				title 	: "Leader Board",
				url 	: "/dashboard/leaderboard",
				icon 	: "list"
			},
			{
				title 	: "My Contents",
				url 	: "/dashboard/my-contents",
				icon 	: "cube"
			},
			{
				title : "Logout",
				url	 : "/login",
				icon	: "log-out"
			},
		]
	}
}
