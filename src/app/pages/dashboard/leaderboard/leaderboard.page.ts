import { HttpClient, HttpHeaders } from '@angular/common/http/';
import { Storage } from '@ionic/storage';
import { storage } from 'firebase';
import { AuthConstants } from './../../../config/auth-constants';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-leaderboard',
	templateUrl: './leaderboard.page.html',
	styleUrls: ['./leaderboard.page.scss'],
})

export class LeaderboardPage implements OnInit {
	
	public dataList = [];

	constructor(
		private authService: AuthService,
		private storage: Storage,
		private http:HttpClient,
	) {
		this.authService.getLeaderBoardList().subscribe((data)=> {
			this.dataList = data['leaderboard'];
		}), (err => {
			console.log('get leaderboard list error : ' + err);
		});
	}

	ngOnInit() {
	}

}
