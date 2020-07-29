import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-topics',
  templateUrl: './selected-topics.page.html',
  styleUrls: ['./selected-topics.page.scss'],
})
export class SelectedTopicsPage implements OnInit {

  constructor(private router: Router ) { }
  openGenerateExam(){
    this.router.navigate(['dashboard/self-assessment/subcategories/selected-topics/generate-exams']);
  }
  
  ngOnInit() {
  }

}
