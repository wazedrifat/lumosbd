import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.page.html',
  styleUrls: ['./self-assessment.page.scss'],
})
export class SelfAssessmentPage implements OnInit {

  constructor(private router:Router) { }

  openSubCategories(){

    this.router.navigate(['dashboard/self-assessment/subcategories']);
  }

  ngOnInit() {
  }

}
