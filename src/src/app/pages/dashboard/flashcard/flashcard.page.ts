import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.page.html',
  styleUrls: ['./flashcard.page.scss'],
})
export class FlashcardPage implements OnInit {

  constructor(private router: Router) { }
  openCardView(){
   this.router.navigate(['/dashboard/flashcard/cardview']);
  }



  ngOnInit() {
  }

}
