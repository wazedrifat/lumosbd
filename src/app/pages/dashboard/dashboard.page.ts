import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router:Router) { }

  openLeaderboard(){

    this.router.navigate(['dashboard/leaderboard']);
  }
  openMyStats(){

    this.router.navigate(['dashboard/my-stats']);
  }

  openMyContents(){

    this.router.navigate(['dashboard/my-contents']);
  }
  openNotes(){
    this.router.navigate(['dashboard/notes']);
  }

  openFlashcards(){
    this.router.navigate(['dashboard/flashcard']);
  }

  openSelfAssessment(){

    this.router.navigate(['dashboard/self-assessment']);
  }

  openWeeklyExams(){

    this.router.navigate(['dashboard/weekly-exam']);
  }



  ngOnInit() {
  }

}
