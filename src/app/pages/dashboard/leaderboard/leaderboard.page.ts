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
		console.log('leaderboard page');
		
		// this.dataList.push({
		// 	points: '10.60',
		// 	student_id: "11",
		// 	exam_given: "1",
		// 	name: "Farid Ahmed",
		// 	rank: "1"
		// });

		// this.dataList.push({
		// 	points: "9.7",
		// 	student_id: "16",
		// 	exam_given: "2",
		// 	name: "rifat",
		// 	rank: "2"
		// });

		// console.log('dataList : ' + this.dataList[0]);
		this.authService.getLeaderBoardList().subscribe((data)=> {
			console.log('data: ' + JSON.stringify(data));
		}), (err => {
			console.log('get leaderboard list error : ' + err);
		});

		// let headers = new HttpHeaders({
		// 	'Authorization': AuthConstants.savedToken
		// });
		// let options = {headers:headers};

		// this.http.get('http://api.lumosbd.com/v1/dashboard/get-leaderboard-list', options).subscribe((res)=> {
		// 	console.log('http get : ' + JSON.stringify(res));
		// });


		// console.log('leaderboard');
		// this.storage.get(AuthConstants.token).then((val)=> {
		// 	if (val) {
		// 		console.log('val found');
		// 	}
		// 	console.log('authorization : ' + val);
		// });
	}

	ngOnInit() {
	}

}
