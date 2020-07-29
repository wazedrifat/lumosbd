import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {

  constructor(private router:Router) { }
  openSelectedTopics(){
    this.router.navigate(['dashboard/self-assessment/subcategories/selected-topics']);
  }
  ngOnInit() {
  }

}
