import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-exam',
  templateUrl: './weekly-exam.page.html',
  styleUrls: ['./weekly-exam.page.scss'],
})
export class WeeklyExamPage implements OnInit {

  constructor(private router:Router) { }
  openStartExam(){
    this.router.navigate(['/dashboard/weekly-exam/start-exam']);
  }
  ngOnInit() {
  }

}
