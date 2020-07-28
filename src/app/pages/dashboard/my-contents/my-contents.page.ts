import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-contents',
  templateUrl: './my-contents.page.html',
  styleUrls: ['./my-contents.page.scss'],
})
export class MyContentsPage implements OnInit {

  constructor(private router:Router) { }

  openNotes(){

    this.router.navigate(['dashboard/my-contents/notes']);
  }

  openQuestions(){
    this.router.navigate(['dashboard/my-contents/questions']);
  }

  ngOnInit() {
  }

}
