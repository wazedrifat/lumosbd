import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-stats',
  templateUrl: './my-stats.page.html',
  styleUrls: ['./my-stats.page.scss'],
})
export class MyStatsPage implements OnInit {

  constructor(private router:Router) { }

  openSelfAssessment(){

    this.router.navigate(['dashboard/my-stats/self-assessment']);
  }

  OpenWeeklyExams(){

    this.router.navigate(['dashboard/my-stats/weekly-exams']);
  }

  ngOnInit() {
  }

}
